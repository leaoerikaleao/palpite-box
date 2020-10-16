import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const fromBase64 = value => {
    const buff = Buffer.from(value, 'base64');
    return buff.toString('ascii');
}

export default async (req, res) => {
    console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })

        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[2]

        await sheet.loadCells('A3:B3')

        const promotionCell = sheet.getCell(2, 0)

        const textCell = sheet.getCell(2, 1)
        console.log(promotionCell.value === 'VERDADEIRO')

        res.end(JSON.stringify({
            showCoupon: promotionCell.value === 'VERDADEIRO',
            message: textCell.value
        }))

    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}
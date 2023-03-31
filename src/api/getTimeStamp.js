const { isValidDate } = require('../utils/helper')
const logger = require('../utils/logger')


const getTimeStamp = (req, res) => {
    const dateString = req.params.date
    logger.info('getTimeStamp Start')
    logger.info(`dateString: ${dateString}`)
    if (/\d{5,}/.test(dateString)) {
        const dateInt = parseInt(dateString)
        const localDate = new Date(dateInt)
        logger.info(`dateInt: ${dateInt}`)
        logger.info(`date : ${new Date(dateInt)}`)
        logger.info(`isValidDate : ${isValidDate(dateInt)}`)
        return res.status(200).json({
            unix: localDate.getTime(),
            utc: localDate.toGMTString() 
        })
    } else if (dateString && isValidDate(dateString)) {
        const localDate = new Date(dateString)
        return res.status(200).json({
            unix: localDate.getTime(),
            utc: localDate.toGMTString() 
        })
    } else if (!dateString) {
        const localDate = new Date()
        return res.status(200).json({
            unix: localDate.getTime(),
            utc: localDate.toGMTString() 
        })
    } else {
        return res.status(200).json({
            error: 'Invalid Date'
        })
    }
}

module.exports = getTimeStamp;

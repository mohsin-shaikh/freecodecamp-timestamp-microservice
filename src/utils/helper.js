const successResponse = ({ data, statusCode = 200 }) => ({
    statusCode,
    data,
    success: true,
});

const errorResponse = ({
    errorMessage = 'Something went wrong',
    statusCode = 500,
    error = {},
}) => ({
    statusCode,
    errorMessage,
    error,
    data: null,
    success: false,
});

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateFields = (object, fields) => {
    const errors = [];
    fields.forEach((f) => {
        if (!(object && object[f])) {
            errors.push(f);
        }
    });
    return errors.length ? `${errors.join(', ')} are required fields.` : '';
};

const uniqueId = (length = 13) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const isInvalidDate = (dateString) => new Date(dateString).toString() === 'Invalid Date'
const isValidDate = (dateString) => new Date(dateString).toString() !== 'Invalid Date'

module.exports = {
    successResponse,
    errorResponse,
    validateEmail,
    validateFields,
    uniqueId,
    isInvalidDate,
    isValidDate
}

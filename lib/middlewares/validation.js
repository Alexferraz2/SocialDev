import withJoi from "next-joi";

export default withJoi({
    onValidationError: (req, res, error) => {
        res.status(400).send(error.details)
    }
})
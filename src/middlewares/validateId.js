import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const validateId = (idKey) => {
    const middlewareFn = (req, res, next) => {
        try {
            const { [idKey]: id } = req.params;
            if (!isValidObjectId(id)) {
                throw createHttpError(400, `ID:${id} not valid`);
            }
              next();
            } catch (error) {
              next(error);
            }
    };
    return middlewareFn;

 };

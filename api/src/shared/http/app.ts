import * as express from "express";
import "express-async-errors";

import "reflect-metadata";
import { AppError } from "../../errors/AppError";
import { router } from "../../routes";
import "../container";

const app = express();
app.use(express.json());
app.use(router);

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: express.NextFunction
    ) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                message: err.message,
            });
        }

        return res.status(500).json({
            message: `Internal server error - ${err.message}`,
        });
    }
);

export { app };

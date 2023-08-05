import {persistor} from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export const withPersist = (component : () => React.ReactNode) => () => (
    <PersistGate loading={null} persistor={persistor}>
        {component()}
    </PersistGate>
);
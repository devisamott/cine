import { CleanButton } from "./SecondPages/cleanButton";
import { ConfirmButton } from "./SecondPages/confirmButton";
import { DaySelected } from "./SecondPages/daySelect";
import { NameById } from "./SecondPages/nameById";
import { RenderChair } from "./SecondPages/renderChair";
import { ResevedChair } from "./SecondPages/reservedChairs";
import { Home } from "./SecondPages/routeToHome";
import { Schedules } from "./SecondPages/scheduleHeader";
import { Header } from "./header";


function RenderSecondPage ( ) {
    return(
        <>
            <Header />
            <Home/>
            <Schedules/>
            <RenderChair/>
            <NameById/>
            <DaySelected/>
            <ResevedChair/>
            <ConfirmButton/>
            <CleanButton/>
        </>
    )
}
export default RenderSecondPage
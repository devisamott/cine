import { RenderChair } from "./SecondPages/renderChair";
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
            
        </>
    )
}
export default RenderSecondPage
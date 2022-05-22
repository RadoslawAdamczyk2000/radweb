import { ResponsivePie } from "@nivo/pie";
import { aboutMe } from "../../../../../content/about-me";
import { ChartWrapper } from "./styles";
const Chart = () => {
    const {data} = aboutMe.home.page.programming;
    return(
        <ChartWrapper>
            
            <ResponsivePie
                activeInnerRadiusOffset={10}
                activeOuterRadiusOffset={5}
                animate={true}
                arcLinkLabelsStraightLength={2}
                arcLinkLabelsTextOffset={4}
                arcLinkLabelsThickness={0}
                colors={{ datum: 'data.color' }} 
                cornerRadius={2}
                data={data}
                enableArcLabels={false}
                innerRadius={0.8}
                margin={{
                    bottom:20,
                    left:80,
                    right:80,
                    top:20,
                }}
                motionConfig='wobbly'
                padAngle={0.5}
                sortByValue={false}
                theme={{
                    tooltip: {
                        container: {
                            fontSize: "15px",
                            fontWeight: 400
                        }
                    }
                }}
                transitionMode='endAngle'
            />
        </ChartWrapper>
    )
}
export default Chart;
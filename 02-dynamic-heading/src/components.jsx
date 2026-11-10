function UtcDynamicColorH1(){
    let daily_hour = new Date().getUTCHours()

    let colors_object = {
    morning: "#87CEEB",
    afternoon: "#5C825C",
    evening: "#825C82"
    }
    daily_hour = 16
    let color_style = {'color': ''};
    let greeting = '';


    if (daily_hour < 12){

        color_style['color'] = colors_object.morning;
        greeting = 'Good Morning';

    } else if (daily_hour < 18){

        color_style['color'] = colors_object.afternoon;
        greeting = 'Good Afternoon';

    } else if (daily_hour <= 23){

        color_style['color'] = colors_object.evening;
        greeting = 'Good Evening';
    }

    return <h1 style={color_style}>{greeting}</h1>

}





export default UtcDynamicColorH1;
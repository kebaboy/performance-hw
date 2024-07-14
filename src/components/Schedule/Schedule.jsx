import Event from "../Event/Event";

export const Schedule = () => {
    return (
        <ul className='hero-dashboard__schedule'>
            <Event
                icon='temp'
                iconLabel='Температура'
                title='Philips Cooler'
                subtitle='Начнет охлаждать в 16:30'
            />
            <Event
                icon='light'
                iconLabel='Освещение'
                title='Xiaomi Yeelight LED Smart Bulb'
                subtitle='Включится в 17:00'
            />
            <Event
                icon='light'
                iconLabel='Освещение'
                title='Xiaomi Yeelight LED Smart Bulb'
                subtitle='Включится в 17:00'
            />
        </ul>
    );
}
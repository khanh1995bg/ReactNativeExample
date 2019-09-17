import {theme} from '../theme';

export const getImageFromWeatherType = (weatherType) => {
    switch (weatherType) {
        case "cloud":
            return theme.images.cloud;
        case "rain":
            return theme.images.rain;
        case "snow":
            return theme.images.snow;
        case "storm":
            return theme.images.storm;
        case "sun":
            return theme.images.sun;
        case "sunny":
            return theme.images.cloud;
        
    }
}

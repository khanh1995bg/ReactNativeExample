import {theme} from '../theme';

export const getImageFromWeatherType = (weatherType) => {
    switch (weatherType) {
        case "cloud":
            return theme.images.cloud;
            
    }
}

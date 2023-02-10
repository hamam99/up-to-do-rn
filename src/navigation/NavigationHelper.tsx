import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function dispatch(stackAction: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(stackAction);
  }
}

const NavigationHelper = {navigate, dispatch};

export default NavigationHelper;

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Info from './pages/info';

const MainApp = createStackNavigator(
    {Main, Info}, 
    {
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor:"#f91111"
        },
        headerTintColor:"#fff" 
    },
});
const App = createAppContainer(MainApp);
export default App;
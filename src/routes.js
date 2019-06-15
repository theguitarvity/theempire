import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const MainApp = createStackNavigator(
    {Main}, 
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
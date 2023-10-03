import logo from './logo.svg';
import './App.css';
import { Landing } from './Assign22/Landing';
import { Products } from './Ass/Products';
import { Card, CardContent } from '@mui/material';
import { Categories } from './Ass/Categories';


function App() {
  return (
    <Card>
      <CardContent>
        <Categories/>
      <Products/>
      </CardContent>
    </Card>
   
  );
}

export default App;

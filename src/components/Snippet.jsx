import './App.css'
import Nav from '../components/NavBar';
import Main from '../components/Main';
import Basket from './components/Basket';
import data1 from '../data'
import { useState } from 'react';
// import ResponsiveDialog from './components/BasketDialog';

import checkout from '../components/checkout/Checkout';


function Home() {

     const { products } = data; // extract products from data
     const [cartItems, setCartItems] = useState([]); //Hook method, useState to pass it in Main and Basket down here to be able to use it as hook in these components
     
   
     const onAdd = (product) => {
       const exist = cartItems.find((x) => x.id === product.id);
       if (exist) {
         setCartItems(
           cartItems.map((x) =>
             x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
           )
         );
       } else {
         setCartItems([...cartItems, { ...product, qty: 1 }]);
       }
     };
   
     const onRemove = (product) => {
       const exist = cartItems.find((x) => x.id === product.id);
       if (exist.qty === 1) {
         setCartItems(cartItems.filter((x) => x.id !== product.id)); // if the product.id != cartItems, then remove the item. or if qty  1, remove the item
       } else {
         setCartItems(
           cartItems.map((x) =>
             x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x // else, recrement the item
           )
         );
       }
     };

     return (
          <div className="App">
               <Nav countCartItems={cartItems.length}></Nav>
               
               <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
               >
               </Basket>
               <div>
               <Main products={products} onAdd={onAdd}></Main> {/* products={products} is a hook to be able to pass it to another component */}
               {/* pass product to main because main component is responsible to render the data using props */}
               {/* pass onAdd on Main to be able to export it to Main component as a props */}
               </div>
               {/* <ResponsiveDialog /> */}
               <Header />
               {/* <div><Checkout /></div> */}
          </div>
  );
}

export default Home;



<BrowserRouter>
      <Routes>
   
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="Signlist" element={<SignList />}/>
        <Route path="Form" element={<Form addForm={addForm} />}/>
        <Route path="FormSubmission" element={<FormSubmission form={form} />}/> 
        {/* stored data enters here to send to FormSubmission */}
      </Routes>
    </BrowserRouter>



<BrowserRouter>
<Routes>
  <Route path='/' element={<Nav />} />
  <Route path='/' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={cartItems.length} />} />
  <Route path='/' element={<Main products={products} onAdd={onAdd} />} />

  <Route path="about" element={<About />}/>  

</Routes>

</BrowserRouter>
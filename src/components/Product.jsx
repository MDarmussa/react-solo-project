// This element to render the products data and show it in the cart, (sibbling of Main.js)

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { maxWidth } from '@mui/system';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function Product(items) {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { product, onAdd } = items; // props

  return (
  <div className='rowProducts'>
    <div className='productDiv'>
      <Card sx={{ maxWidth: 345, boxShadow: 20  }} className='productCard'>
      <CardHeader
        avatar={ 
          <Avatar className='avatarPrice' sx={{ bgcolor: red[500], width: 50, height: 50, fontWeight: 'bolder'}} aria-label="recipe" >
             <div className='price'>${product.price}</div>
          </Avatar>
        }
        
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }

        title=<h2 className='productName'>{product.productName}</h2>
      />

      <CardMedia
        component="img"
        height="auto"
        src={product.image} alt={product.name}
      />
        <button onClick={() => onAdd(product)}>Add To Cart</button>

      <CardActions disableSpacing>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </div>
  </div>
  );
}



import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import * as PropTypes from "prop-types";

function Img(props) {
    return null;
}

Img.propTypes = {src: PropTypes.any};
const PokemonCard = ({item}) =>{
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                 <Box>
                <img src ={item.sprites.front_default}/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       nombre: {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        peso:{item.weight}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tipo:{item.types[0].type.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>

    );

}


export default PokemonCard;
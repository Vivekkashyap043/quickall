import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from '@mui/icons-material';
import Vivek from '../../../constants/Vivek.jpg';
import Ramasri from '../../../constants/Ramasri.jpg';
import Jyoti from '../../../constants/Jyoti.jpg';
import Maanas from '../.././../constants/Maanas.jpg';
import AboutBack from '../../../constants/AboutBack.jpg';

const Header = styled(Box)`
   display: flex;
   background: linear-gradient(to right, #009fff, #ec2f4b);
   height: 70px;
   & > svg, & > p{
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    font-size: 30px;
}
`
const DrawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "28%",
    boxShadow: 'none',
    border: 'solid #36013F 7px',
    overflow: 'hidden',
    background:  'linear-gradient(217deg, #737CA1, rgba(100,0,0,0) 70.71%), linear-gradient(127deg, #DCD0FF, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), #FFFFFF 70.71%)'
}

const Info = styled(Typography)`
    margin: 20px;
    color: black;
    font-size: 20px;
    font-family: times new roman;
`
const Contact = styled(Box)`
   margin-top: 10px;
   font-weight: 550;
   font-size: 25px;
   font-family: times new roman;
`

const Image = styled('img')({
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '4px solid black'
})

const Name = styled(Typography)`
    text-align: center;
    fontSize: 20px;
    font-weight: 530;
`
const AboutDrawer = ({open, setOpen}) =>{

    const handleClose = () =>{
        setOpen(false);
    }

    
    return(
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{sx: DrawerStyle}}
            style={{zIndex: 1500}}
        >
            
       
                <Header>
                     <ArrowBack style={{margin:'10px 10px 10px 10px', fontSize: 30}} onClick={() => setOpen(false)}/>
                     <Typography>About QuickAll</Typography>
                </Header>
                <Info>
                <Typography style={{fontSize: '25px', textAlign: 'center', marginBottom: '10px'}}>
                    <u>This app is developed by</u>
                </Typography>
                <Box style={{border: '5px solid black', backgroundImage: `url(${AboutBack})`, backgroundSize: 'cover'}}>
                    <Box style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
                        <Box style={{margin: '10px'}}>
                            <Image src={Vivek} />
                            <Name>Vivek kashyap</Name>
                        </Box>
                        <Box style={{margin: '10px'}}>
                            <Image  src={Ramasri} />
                            <Name>Ramasri</Name>
                        </Box>
                    </Box>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box style={{margin: '10px'}}>
                            <Image src={ Maanas} />
                            <Name>Maanas</Name>
                        </Box>
                        <Box style={{margin: '10px'}}>
                            <Image src={Jyoti} />
                            <Name>Jyothi</Name>
                        </Box>
                    </Box>
                </Box>
                <Contact>
                <span style={{color: '#00FF00', fontWeight: 550, fontSize: 23}}><u>Our contact details</u></span><br/>
                vivekkashyap043@gmail.com<br/>
                guvvaramasri123@gmail.com
                </Contact>
                </Info>
        </Drawer>
    )
}

export default AboutDrawer;
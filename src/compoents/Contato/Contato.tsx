import { Card, CardHeader, Avatar, CardContent, Typography  } from "@mui/material";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import "./Contato.css"
import gu from "../../assets/gu.jpg"
import vag from "../../assets/vag.jpg"


function Contato() {
    return (
        <div>
            <h2 className="titleContato"> ... </h2>
        <div className="contatoWrapper">
            <Card sx={{ width: {xs: 300,
                                sm: 320,
                                md: 320,
                                lg: 380,
                                xl: 380,}, 
                        height: 250, boxShadow: 5,  }} className="cardContato" >
                <CardHeader
                    avatar={
                        <Avatar src={gu} sx={{ width: 100, height: 100 }} aria-label="recipe">
                        </Avatar>
                    }

                    title="Gustavo Rutiquewiski"
                    subheader="Back-end"    
                />

                <CardContent>
                    <Typography sx={{ marginBottom: 1 }}> 
                        <a className="gitLink" href="https://github.com/Rutiquewiski">
                            <div className="contactIcon">
                                <AiFillGithub />
                            </div> Github </a></Typography>
                    <p className="mailP">
                        <div className="contactIcon">
                            <AiFillMail />
                        </div> E-mail: gustavo.rutiquewiski@outlook.com
                    </p>
                </CardContent>
                
                
            </Card>

            <Card sx={{ width: {xs: 300,
                                sm: 320,
                                md: 320,
                                lg: 380,
                                xl: 380,}, 
                        height: 250, boxShadow: 5,  }} className="cardContato" >
                <CardHeader
                    avatar={
                        <Avatar src={vag} sx={{ width: 100, height: 100 }} aria-label="recipe">

                        </Avatar>
                    }

                    title="Vagner da Silva Rosnoski"
                    subheader="Front-end"
                />

                <CardContent >
                    <Typography sx={{ marginBottom: 1 }}>
                        <a className="gitLink" href="https://github.com/VagnerSR">
                            <div className="contactIcon">
                                <AiFillGithub className="gitIcon"/>
                            </div> Github </a></Typography>

                    <p className="mailP">
                        <div className="contactIcon">
                            <AiFillMail />
                        </div> E-mail: vagnerrosnoski@gmail.com</p>

                </CardContent>
                
                
            </Card>


        </div>
        </div>
    );
}

export default Contato;
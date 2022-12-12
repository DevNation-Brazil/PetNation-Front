import { Alert, Snackbar } from "@mui/material";

interface AlertProps {
    active: boolean
    setActive: Function
    severity: any
    message: string
}

function Alerts(props: AlertProps) {
    return (
        <>
            <Snackbar
                className='alert'
                open={props.active}
                autoHideDuration={60000}
                onClose={() => props.setActive(false)}
                sx={{
                    width: {
                        xs: 360,
                        sm: 370,
                        md: 370,
                        lg: 600,
                        xl: 600,
                    },
                    height: "20%"
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}>

                <Alert onClose={() => props.setActive(false)} severity={props.severity} sx={{ width: '100%', textAlign: "center" }}>
                    Ocorreu um erro inimaginável! Entre em contato no e-mail devnationbr@outlook.com e envie o seguinte código: {props.message}
                </Alert>

            </Snackbar>
        </>
    );
}

export default Alerts;
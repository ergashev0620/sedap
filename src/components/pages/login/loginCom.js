import { Box } from '@mui/material'
import Link from 'next/link'
import styles from '@/styles/loginCom.module.css'
import React from 'react'
import { useRouter } from 'next/router'

export default function LoginCom() {
    const router = useRouter();

    const handleRegisterClick = () => {
        router.push('/register');
    };
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["login"]}>
                    <div className={styles["container"]}>
                        <h1>Log in</h1>
                        <input type="email" placeholder="Email" style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "30px",
                            border: "none",
                            backgroundColor: "#eeeeef",
                            outlineColor: '#00b074',
                        }} />
                        <input type="password" placeholder="Password" style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "30px",
                            border: "none",
                            outlineColor: '#00b074',
                            backgroundColor: "#eeeeef",
                        }} /><br />
                        <input type="checkbox" style={{ float: "left", marginRight: "5px" }} /><span>Remember me</span>
                        <a href="#">Forgot password?</a>
                        <button>log in</button>
                        <hr /><p>Or Connect With</p><hr />
                        <ul>
                            <li><i class="fab fa-facebook-f fa-2x"></i></li>
                            <li><i class="fab fa-twitter fa-2x"></i></li>
                            <li><i class="fab fa-github fa-2x"></i></li>
                            <li><i class="fab fa-linkedin-in fa-2x"></i></li>
                        </ul>
                        <div className={styles["clearfix"]}></div>
                        <span className={styles["copyright"]}>&copy;2019</span>
                    </div>
                </div>
                <div className={styles["register"]}>
                    <div className={styles["container"]}>
                        <i class="fas fa-user-plus fa-5x"></i>
                        <h2>Welcome back friend!</h2>
                        <p>Enter your personal details and start journey with us</p>
                        <button onClick={()=>handleRegisterClick()}>Register <i class="fas fa-arrow-circle-right"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
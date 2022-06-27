import React from "react";
import { useState } from "react";


function Login() {
    const [name, setName] = useState("");
    return (
        <>
            <div>siva</div>
            <div class="shadow p-2 mb-5 bg-body rounded" style={{width:"400px"}}>
                <h1 className="text-info">Login Form</h1>
                <form className="p-3 ">
                    <label>Username:
                        <input className="p-3"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </form>
                <form className="p-3">
                    <label>Yourage:
                        <input className="p-3"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </form>
                <form className="p-3">
                    <label>Email Id:
                        <input className="p-3"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </form>
                <form className="p-3">
                    <label>Passward:
                        <input className="p-3"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </form>
                <input type="submit" />
            </div>
        </>
    )
}
export default Login
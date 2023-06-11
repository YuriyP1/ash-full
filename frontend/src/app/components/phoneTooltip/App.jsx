import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2"
import { SERVER_ADRESS } from "../../../serverAdress";

export const App = ({dispose}) => {

    const [phone, setPhone] = useState("");
    const [final, setFinal] = useState(null)

    const finalRef = useRef()

    const close = () => {
        setTimeout(()=>{
            finalRef.current.style.animation = 'fade-out-tolltip 1S'
            setTimeout(()=>{
                dispose()
            }, 1000)
        }, 2000)
    }

    const sendPhone = () => {
        if (!phone || phone.length < 10) {
            // Поле не заполнено или содержит менее 10 символов
            alert('Заповніть поле з номером телефону.');
            return; // Останавливаем выполнение функции
          }  if (!phone || phone.length < 10) {
        // Поле не заполнено или содержит менее 10 символов
        alert('Заповніть поле з номером телефону.');
        return; // Останавливаем выполнение функции
        }
        fetch(`${SERVER_ADRESS}/api/fast-call`, {
            method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(phone)
            }) 
            .then(response => response.text())
            .then(contactData => {
              setFinal(contactData);
              close()
            })
            .catch((error) => {
              console.error('Ошибка:', error);
        });
    }

    return (
        <div className="phoneTooltip">
                {
                    final ? <div ref={finalRef} className="phoneTooltip-content__final">{final}</div>

                    :

                    <div className="phoneTooltip-content">
                        <div className="phoneTooltip-content-call">
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                             {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKZUlEQVR4nO2de7BXVRXHP/cqCjoovhCdJFSUGdMcyyYT8xkZJpn5KFN8pOZ7IJ3SHE3SMsdBQ0R0KiUVKcVn5qMywaRUxpTEfIGWIIKYiSWDysVvfyyOXX/svc/e53d+bz8ze+7cs89Za529fuex91p7ny5JVMGGwCnAKGCn1dvmALcAk6oR3Gl0VeGIbwM/Ajbz1M8BjgGeKqqgkyjiiLWBacBhkft/FbgrVUmnkeqIgcAD/P82FMvRwI2Jx3QUKY7YAvjr6r9FOAy4teCxbU935H6bEnbCbcDXgb8EZEwH9oo3rbOIuSLWBp4FhnrqxwJX9Pr/buBAz76rgK2BhfEmdgYxjvgjsK+n7kDgHsf2u4CveI5ZAAwBqnpvbjfybk3j8TthL9xOADgImOmpGxw4rnOR5CsHys+owHG9y3MBGedGyuiI4rs1DQD+BazlqDsNmBzp54HY82AdT/1ngdmRstoa363pFtxO+AXxTgBYCnwpUH9vgqy2xuWIrwEjHNvnAScW0DEDGOep2wS4uYDMtqPy1rQW8G9gA8e+Q4EXq9D1J+DznrpDgNurkN3yVF4RF+F2wvepzglgI7TveeqmAX2rlN/S9L4iNgbecOzzErBtSfoOAu701N0GHFqSnpaj9xVxnmef0SXquwv/LegQYJ8SdbUU2RXRF3iLNV8zZ+G/rxdlXeBNoJ+jbjGwZcn6WoLsijgO97v+mBrofBcbFnexBf4rs63JroinWDPGMBvrcNWKh4A9PXUbActqqLvp6MbGflyBngk11n1EoO6KQF1b0o29yVSyArijxrpfBX7qqTsa2KbG+puKbmC4Y/tDwDt10H825nQX4+ugv2noBrZzbJ9RJ/0rgXM8dQcDg+pkR8Ppxh15+0cdbZiIDau4+E4d7Wgo3UAfx/ZVdbbjEs/2Y+tpRCPxDYPHJhWUxWTgP47tA4HP1dmWhtCN3acrKZoyU5Tl2Oisi13raUij6MbiDJXsUUcb1sbiFT6d69XPlMbhc0Q98o82wIZQ5gEXYOFZF4vqYEvD6cYSxyrZHPh0jXQOAy7D3swmYKk1PlbhHzZvK7qB33nqyhz+BtgRuAl4DjgTi3/kMQZ4u2Q7mpJs0O9V1nxAv4GlWpbBD4EfJB4zGcsY6Qiy19RbHHWbYOHNaplOuhPOoYOcAHyQYLaLJwnskSoTpy70yPUxXdKOjU72akTpHbN+Afe40yeBuQV8PAiLuOWxCpgKXA08VkBPW9C7B32pZ5+isYGdc+rfAH6MjXUdSwc7AT6cxdEHi4q5OlBFroovA791bO/B+g1XYXHyj+DDV8RK4HLPfhMLyPaNqHZh/YiPnNCLyky/DbEMiy7HvnsAf06Q3Q94HVjfUTeV8vspLU3lKOtb+CNj1yXKXoG9uro4Cuu9f8RqXGn5fbEhaVec4gTg2gT5nwCe9tTdjX9WUcfhiju8g+W6upiEf66Di7/jnzk0itqm67QUoTl0r2GBmUpuxJ8g5mIHzCEuFmLpPB1PKBJ3nGf7aNKiZs/gf1ZsBVyYIKttyZtVOgPY27F9CWlRvP64Q6EZO9Pha3bkxaaP8mwfRNoUrv8CpwbqXR2/jiLPEYuA8z11p5CWKX418DdP3VbAlARZbUfsWhzzcU9WWYYtE9QTqW8w8HKg/pvAryJltRWxaTO+mTwDSGu4BcDpgfpphEOnbUusI+YAF3vqDsUWyIrlKuD3gfqHEmS1DanrNc3FYs8uUmad9sHevHxx6z8AX0wxrNVJzeg7IFD3QIKclbjncmeMAK5MkNfypDpiIXC8p24IaQtjPUE4Ln06tZk61pwUjLFOD8Sdz06UNSUgS5KOaHQ8uR6l6CqXXcAr+GeAfgFb5ymWRwkPAI4E7k+Q13JUs9zoMCxZzEUPdquKTZfsh/VVQlN729oZ1TgCbBT2ek9d6ooF22KZJKHn1pFYX6NWrIXl/Q7BMtSfpV5jYCXc3yYF7u8PJsoaHpCVMaZG9+ljJP3Toe9pWX7W4BrpRVIpjkDSrEDDXZsoa2RAVsaEkhtiXITOlZJ+LmlYybpLdcQ6kpYETuKCRHmHRjTM3ZLWLcH2oyN0VTJJ0hYl6C7dEch+KSFOTJQXc2XMk7RTFTZvHKHDx9uSvluF7po5Akn75xh/UKK83SWtyJH5vqRjC9p7fY7sGJ6RdEBB/TVzBJJOzTF8RKK87eV+iFbys0S5WwZkvSfpN5KWRejNuE7SRok21NQRSLo4x+jPJMrbQNLMiMZ4StJukTInBuQct3qfjSSNlfRShG5JWirp8MRzq6kjUPiyX6V0ZyDpmsgGOT9HTl9J73qOnefYv0vSaZJejdQ/RfYC0xSOQNI9AWOLOuPkyMZ4UtK+HhljA8cdHNDdT9aneD9C/4uS9ow9r1o7AoVvKUWdsZvinhuSNFXS0Irjl3r2XRypf5ikOyL1Rw2C1sMRXZJmBwwt6oz1JN0c2RjvS7pa9uA/I7DfmYk2fEPSaxH6b1dOn6cejkBSt/KdsX9B2Scr/xU3hh7ZsyNV/wDFvQY/L/shNNQRMc6QwvfnUBkie92shvFVnt9hkt7M0bFC0t6u4+vpiFhnnFCF/FMlvZUj38f6JZzf5pLui9C1xituvR0R64xxVcgfKOvcpZD1G8oq50XoHN37mEY4InPGgzmGpvaUK8unJP06okEm1ugcR0panqP7g+9wNMoRWcm7r9+v6kdYd5F0uaQXKmS/otrFNrKytSyeEWKYVDxmXSbX4Z8CABa1G7X6b7XsjC1r8R7wCPGpotXQB7gP2M9TvwD4eDM4AuAn+BdZBJvFdAit/eGP+/B/1OSMZnEEwMlYxniIs/BPQW4FfM54qZkcATa58U7c04szbsZmLbmWwGsFZrHmWrurms0RYMtj3wt8LLDPPOBwLDm61diXNXO+VtZ7NcsYskTnmYF9tgOeJDwLqVm5yLFtcTM6Amzi/T7kf5z8KmytqZjV0JqBy4DdHdtvbXQ/IqYcn/MeLtkIaNFxqnqVUAh5s0YbF1t2lTQ/cCIZkyT1aQJ7K0soZed7UuN71imlr6SbAieUMV8lZFWUWELxj4ez/RptZJESGyr9paTNGmzrpQH7lqjX8E2jG7Vo2UHSY4GTzHhTFvSvt339FR5HWy5pm97HNLpBqy2xizc+IfsacT1sGilpUcCW5bIf0oeOa3RDllGGS3o8cOK9uV/SfjWyo5+kK3P0vyJPuLTRjVhmiQnGZNyrch1yjKSFOTofl7SJT0ajG6/ssoPiQpUZD8sasUjSALKs9Ucj9EzJk9XohqtVOVLSyxENlLFE0mRZXm6/HNlDZe/+cyNlnxRjczMO+pVFH2wltrNwf5HYx+vYIpLPY9PPerAFIrfFPiri+kqZi4eBk7DpX7m0syMyNgXOxeZ0pyyDV5S3sc98Ji1c3AmOyNgKc8YJ2AL0teAa7MsAS1IP7CRHZPQHvoXFyfOWzY6hB7gB+8qkb0XPXDrREb3ZD1td5wDSF3mciw3B34AlAFRFpzsiowtbjW037GG8PbYgWPZM6cFW/ZyPPYRnYl83Lo3/AV/+0vOfsMSzAAAAAElFTkSuQmCC" alt="icon"></img> */}
                            {/* <button onClick={() => window.open('tel:+1234567890')}>Зателефонувати</button> */}
                        </div>
                        <div className="phoneTooltip-content-or">
                            <p>або</p>
                        </div>
                        <div className="phoneTooltip-content-fastCall">
                            <h5>Замовити швидкий дзвінок</h5>
                            <div className="input-wrapper">
                            <PhoneInput
                                country={'ua'}
                                onChange={phone => setPhone({ phone })}
                            />
                            </div>
                            <button onClick={sendPhone}>ВІДПРАВИТИ</button>
                        </div>
                    </div>
                    
                }
        </div>
    )
}

export default App
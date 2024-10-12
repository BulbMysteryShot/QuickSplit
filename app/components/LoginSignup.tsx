import React from "react";
import { Button, View, StyleSheet, SafeAreaView } from "react-native";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const LoginSignup = () => {
    return (
      <Authenticator.Provider>
        <Authenticator>
          <SafeAreaView style={styles.container}>
            <SignOutButton />
          </SafeAreaView>
        </Authenticator>
      </Authenticator.Provider>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    signOutButton: {
      alignSelf: "flex-end",
    },
  });

export default LoginSignup;

// import { View, StyleSheet, TextInput, Text, AsyncStorage } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


// const login = async ({ email, password, setErrors, navigate }) => {
//     try {
//         const data = { email, password };
//         const response = await fetch("http://localhost:8000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             const responseData = await response.json();
//             console.log(responseData.message);
//             await AsyncStorage.setItem('token', responseData.token);
//             navigate('/home');
//         } else {
//             const errorData = await response.json();
//             console.error(errorData.error); // Error message from the server
//             setErrors([errorData.error]);
//         }
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// };


// const SignUpClick = async ({username, email, password, setErrors, navigate}) => {
//     try {
//         const data = { username, password, email };
//         const response = await fetch("http://localhost:8000/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });
//         if (response.ok) {
//             const responseData = await response.json();
//             console.log(responseData.message);
//             await AsyncStorage.setItem('token', responseData.token);
//             navigate('/home');
//         } else {
//             const errorData = await response.json();
//             console.error(errorData.error); // Error message from the server
//             setErrors([errorData.error]);
//         }
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }


// export default function OpenCameraButton() {
//     return (
//         <View style={styles.Container}>
//             <View style={styles.Header}>
//                 <Text style={styles.Text}>{action}</Text>
//                 <View style={styles.Underline} />
//             </View>
//             <View style={styles.UserInfo}>
//                 {action === 'Login' ? null : (
//                     <View style={styles.Input}>
//                         <TextInput
//                             style={styles.TextBox}
//                             placeholder='Username'
//                             value={username}
//                             onChangeText={handleUsernameChange}
//                         />
//                     </View>
//                 )}
//                 <View style={styles.Input}>
//                         <TextInput
//                             style={styles.TextBox}
//                             placeholder='Email'
//                             value={email}
//                             onChangeText={handleEmailChange}
//                             keyboardType='email-address'
//                         />
//                 </View>
//                 <View style={styles.Input}>
//                         <TextInput
//                             style={styles.TextBox}
//                             placeholder='Password'
//                             value={password}
//                             onChangeText={handlePasswordChange}
//                             secureTextEntry
//                         />
//                 </View>
//             </View>

//             <View style={styles.errorMessages}>
//                 {errors.map((error, index) => (
//                     <Text key={index} style={styles.errorMessage}>{error}</Text>
//                 ))}
//             </View>

//             <View style={styles.SubmitCont}>
//                 <TouchableOpacity
//                     style={styles.submit}
//                     onPress={() => { setAction('Sign Up'); signUp(); }}
//                 >
//                     <Text>Sign Up</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     styles={styles.submit}
//                     onPress={() => {
//                         if (action === 'Login') {
//                             login();
//                         } else {
//                             setAction('Login');
//                         }
//                     }}
//                 >
//                     <Text>Login</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     Container: {
//         display: flex;
//         flex-direction: column;
//         margin: 80px auto auto;
//         background: #fff;
//         padding-bottom: 30px;
//         width: 40%;
//     },
//     Header: {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 9px;
//         width: 100%;
//         margin-top: 30px;
//     }
// });


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'grey',
//         borderRadius: 4,
//         padding: 10,
//         marginBottom: 12,
//     },
//     button: {
//         backgroundColor: 'blue',
//         padding: 16,
//         borderRadius: 4,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     error: {
//         color: 'red',
//         marginBottom: 12,
//     },
//     switchText: {
//         color: 'blue',
//         textAlign: 'center',
//         marginTop: 16,
//     },
// });

// export default LoginSignup;

// //   <div className={'cont'}>
// //             <div className={"header"}>
// //                 <div className={"text"}>{ action }</div>
// //                 <div className={"underline"}></div>
// //             </div>
// //             <div className={"inputs"}>
// //                 {action==="Login"?<div></div>:
// //                     <div className={"input"}>
// //                         <img src={""} alt={""}/>
// //                         <input type={"name"} placeholder={"Name"}
// //                                value={username}
// //                                onChange={handleUsernameChange}/>
// //                     </div>}
// //                 <div className={"input"}>
// //                     <img src={""} alt={""}/>
// //                     <input type={"email"} placeholder={"Email"}
// //                         value={email}
// //                         onChange={handleEmailChange}/>
// //                 </div>
// //                 <div className={"input"}>
// //                     <img src={""} alt={""}/>
// //                     <input type={"password"} placeholder={"Password"}
// //                         value={password}
// //                         onChange={handlePasswordChange}/>
// //                 </div>
// //             </div>
// //             <div className="error-messages">
// //                 {errors.map((error, index) => (
// //                     <div key={index} className="error-message">
// //                         {error}
// //                     </div>
// //                 ))}
// //             </div>
// //             <div className={"submitContainer"}>
// //                 <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up"); handleSignUpClick()}}>Sign Up</div>
// //                 <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{if(action==="Login") {handleLoginClick()} else {setAction("Login");}}}>Login</div>
// //             </div>
// //         </div>
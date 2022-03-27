import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop:30
    },
    form:{
        width: '100%',
    },
    formLabel:{
        color:"#000000",   
        fontSize: 18,
        paddingLeft: 20,       
    },
    formInput:{
        width:'90%',
        borderRadius:50,
        backgroundColor:'#f6f6f6',
        height: 40,
        margin:12,
        paddingLeft:10
    },
    textButton:{
        fontSize:20,
        color:'#ffffff',
    },
    button:{
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal:15,
        marginLeft: 12,
        marginTop: 30,
        marginBottom:350,
    },
    errorMessage:{
        fontSize:12,
        color:'red',
        fontWeight:'bold',
        paddingLeft:20
    },
    showResultImc:{
        width:'100%',
        height:'50%',
    }
})

export default styles
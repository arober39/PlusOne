import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
 const [count, setCount] = useState(0);


 const handleReset = () => setCount(0);
 const handleIncrement = () => setCount((prev) => prev + 1);


 const triggerRecordedError = () => {
   try {
     throw new Error("Simulated controlled error from Plus One app")
   } catch (e) {
     alert("You intentionally threw an error")
   }
 };


 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerText}>Plus One</Text>
     </View>


     <View style={styles.counterWrapper}>
       <Text style={styles.counterText}>{count}</Text>
     </View>


     <View style={styles.actionsRow}>
       <ButtonBox label="Reset" onPress={handleReset} />
       <ButtonBox label="+1" onPress={handleIncrement} />
       <ButtonBox label="Error" onPress={triggerRecordedError} />
     </View>
   </View>
 );
}


type ButtonBoxProps = {
 label: string;
 onPress: () => void;
};


function ButtonBox({ label, onPress }: ButtonBoxProps) {
 return (
   <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
     <Text style={styles.buttonText}>{label}</Text>
   </TouchableOpacity>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   paddingHorizontal: 24,
   paddingTop: 48,
   paddingBottom: 32,
 },
 header: {
   alignSelf: "center",
   paddingVertical: 8,
   paddingHorizontal: 24,
   borderWidth: 2,
   borderColor: "#2b3a42",
   borderRadius: 6,
   shadowColor: "#000",
   shadowOpacity: 0.15,
   shadowRadius: 6,
   shadowOffset: { width: 0, height: 2 },
   marginBottom: 24,
 },
 headerText: {
   fontSize: 24,
   fontWeight: "600",
   color: "#2b3a42",
 },
 counterWrapper: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
 },
 counterText: {
   fontSize: 200,
   fontWeight: "600",
   color: "#000",
 },
 actionsRow: {
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   gap: 16,
 },
 button: {
   flex: 1,
   paddingVertical: 14,
   borderWidth: 2,
   borderColor: "#2b3a42",
   borderRadius: 6,
   alignItems: "center",
   shadowColor: "#000",
   shadowOpacity: 0.15,
   shadowRadius: 6,
   shadowOffset: { width: 0, height: 2 },
 },
 buttonText: {
   fontSize: 18,
   fontWeight: "600",
   color: "#000",
 },
});


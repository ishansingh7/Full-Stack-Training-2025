function submitForm(submit,db){
    var[dbName,comment]=db();
    console.log("My database name is",dbName,comment);
    console.log(submit);
    
console.log(submit)
}
function database(){
    dbName="SECE"
    return[dbName,"Data stored Successfully"]

}
submitForm("Form submitted successfully",database)
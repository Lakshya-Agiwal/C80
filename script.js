var list=[];
var length_array=0;
var found=0;
function in_array()
{
    var add=document.getElementById("input_array").value;
    list.push(add);
    document.getElementById("list_o").innerHTML=list;
     length_array=list.length;
}
function display_o()
{
    for (i=0;i<length_array;i++)
    {
    document.getElementById("o").innerHTML+=list[i]+"<br>";
    }
}
function display_s()
{
    var sor=list.sort();
    
    for (i=0;i<length_array;i++)
    {
    document.getElementById("s").innerHTML+=sor[i]+"<br>";
    }

}
function in_search()
{
    found=0;
    var search=document.getElementById("input_find").value;
    for (i=0;i<length_array;i++)
    {
        if (search==list[i])
        {
         found=found+1;

        }
        
    }

    document.getElementById("i").innerHTML=search+" is found "+found+"times/'s.";
    
}
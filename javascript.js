        var total = 0;
        
        var i = 1;
        
        var message = "Please select a size";
        
        var itemCost = [];

        
        function add(n){
            
            sizeId = "size" + n;
           
            messageId = "message" + n;
            
            size = document.getElementById(sizeId).value;
            
            if (size==="size"){
                document.getElementById(messageId).innerHTML = message;
                return 0;
            }
           
            brand = "brand" + n;
            priceId = "price" + n;
            quantityId = "quantity" + n;
           
            
            name = document.getElementById(brand).innerHTML;
            
            price = document.getElementById(priceId).innerHTML;
            
            quantity = document.getElementById(quantityId).value;
            
            var node = document.createElement("LI");
            
            item = "item"+i;
            node.setAttribute("id", item)
            
            itemCost[i-1] = Number(price) * Number(quantity);
            
            i += 1;
            
            var textnode = document.createTextNode(name+" "+quantity+" x "+price+" dt, size: "+ size);
            
            node.appendChild(textnode);
            
            document.getElementById("items").appendChild(node);

            total += Number(price) * Number(quantity);
            
            document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " dt";
           
            document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+item+"'"+')">x</button>';
            
            
        }

         
         function deleteE(eId) {
            document.getElementById(eId).innerHTML = ' ';
        }

        
        function deleItem(eId){
            document.getElementById(eId).remove();
            
            n = Number(eId.slice(-1)) - 1;
            
            total -= itemCost[n];
            
            document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " dt"; 
        }
         $(document).ready(function(){
        $('.content').click(function(){
          $('.content').toggleClass("heart-active")
          $('.text').toggleClass("heart-active")
          $('.heart').toggleClass("heart-active")
        });
      });
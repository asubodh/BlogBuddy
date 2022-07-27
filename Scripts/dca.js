document.getElementById('checkdomain').addEventListener("click", checkdomain); 

// import jq123 from '..style.json' assert {type: 'json'};
{/* <script type="module" src="../style.json"></script> */}



function checkdomain(){

    
    // eslint-disable-next-line
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    jQuery('#result').html('');
    var domain = jQuery('#domain').val();
    // eslint-disable-next-line
    if(domain==''){
        jQuery('#result').html('<div className="dca-result">Please Enter Domain Name.</div>');
    }

    else if((domain.startsWith("https://") || domain.startsWith("http://" ))){
        jQuery('#result').html('<div className="dca-result">Please Enter Domain Name without http:// or https:// . [eg: google.com]</div>');
    }

    else if((! domain.includes("."))){
        jQuery('#result').html('<div className="dca-result">Please Enter Domain with Extension. [eg: google.com]</div>');

    }

    else if((domain.match(format))){
        jQuery('#result').html('<div classname="dca-result">Please Enter a Valid Domain Name. [eg: google.com]</div>');

    }

    else{
        
        jQuery('#result').html('<center><img class="loading-gif" src="https://cdn.discordapp.com/attachments/984451594252865536/984451650540421160/loading.gif"></center>');
        $.getJSON("../style.json", function(data){
    
        jQuery.ajax({
            
            url:'https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_'+ data.jq123 +'&domainName=' + domain,
            success:function(result){
                jQuery('#result').html(`<div className="dca-result"> THE DOMAIN IS `  + result.DomainInfo.domainAvailability +`.</div>`);
                // eslint-disable-next-line
                if(result.DomainInfo.domainAvailability == 'AVAILABLE'){
                    const out = document.querySelector('#result');

                    out.style.color = "rgb(0 155 0)";
                }
                else{
                    const out = document.querySelector('#result');

                    out.style.color = "#FF0000";
                }
            }
        });
        })  
    }
}
document.getElementById('getthumnail').addEventListener("click", getthumnail); 


function getthumnail() {
    var y_url = document.getElementById('yturl').value;
   

    if (!y_url) {
        document.getElementById('result').innerHTML = "Please provide a url.";
    } else {

        if (y_url.includes('youtube') || y_url.includes('youtu.be')) {


            if (y_url.startsWith("https://www.youtube.com/")) {

                var now_url = y_url.slice(32)

                var html = '<a href="https://i.ytimg.com/vi/' + now_url + '/maxresdefault.jpg" target="_blank" download="ytthumnail smalltechtools.com"><img class="outthum" src="https://i.ytimg.com/vi/' + now_url + '/hqdefault.jpg" alt="Extracted Youtube Thumnail"></a><center>Click the image to Download in HD</center>';

            } else {
                document.getElementById('result').innerHTML = 'Please Enter a Valid URL';
            }

            if (y_url.startsWith("https://youtu.be/")) {
// eslint-disable-next-line
                var now_url = y_url.slice(17)
// eslint-disable-next-line
                var html = '<a href="https://i.ytimg.com/vi/' + now_url + '/maxresdefault.jpg" target="_blank" download="ytthumnail smalltechtools.com"><img class="outthum" src="https://i.ytimg.com/vi/' + now_url + '/hqdefault.jpg" alt="Extracted Youtube Thumnail"></a><center>Click the image to Download in HD</center>';

            } else {
                document.getElementById('result').innerHTML = 'Please Enter a Valid URL';            
            }


            document.getElementById('result').innerHTML = html;


        } else {
            document.getElementById('result').innerHTML = 'Please Enter a Valid URL';

        }
    }
}
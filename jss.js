<script>
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}
</script>

onclick="opentab=('skills')"
onclick="opentab=('education')"
onclick="opentab=('experience')"


.tab-contents{
    display: none;

}
.tab-contents.active-tab{
    display: block;

}



<div class="tab-contents ">
                            <ul>
                                <li><span>HTML</span><br>designing webpage</li>
                                <li><span>CSS</span><br>styling to the  webpage</li>
                                <li><span>JAVASCRIPT</span><br>more advanced styling to the webpages</li>
                            </ul>
                            <div class="tab-contents" >
                            <ul>
                                <li><span>2019-2021</span><br>+2 computer science pass out</li>
                                <li><span>2021-2023</span><br>complete the bachelor of computer science degree in calicut university </li>
                                <li><span>2024-current</span><br>study fullstack cource  in bridgeon institute </li>
                            </ul>

                        </div>

                        
                        <div class="tab-contents" >
                            <ul>
                                <li><span>2024-current</span><br>training period in  bridgeon institute </li>
                               
                            </ul>

                        </div>



                    
.tab-contents ul li{
    list-style: none;
    margin: 10px 0;
}
.tab-contents ul li span{
    color: #df2727;
    font-size: 14px;
}
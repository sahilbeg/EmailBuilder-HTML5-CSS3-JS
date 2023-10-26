
function dragstart(event) {
  event.dataTransfer.setData("text", event.currentTarget.id);
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var element = document.getElementById(data);
  var target = event.target;

  // create a clone of the dragged element
  var clone = element.cloneNode(true);

  // create a div to hold the text content and its associated DOM structure
  var container = document.createElement("div");

  // create a div to hold the text content
  // var textContent = document.createElement("div");

  var textContent = document.createElement('div');
  // Set the ID of the div element
textContent.id = 'newDiv';

  


  const stored_image = `
  <!--[if mso | IE]></td></tr></table><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#003512" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="background:#808080;background-color:#ffffff;margin:0px auto;border-radius:0px;max-width:600px">
   <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#808080;background-color:#ffffff;width:100%;border-radius:0px">
    <tbody>
     <tr>
      <td style="direction:ltr;font-size:0px;padding:0px 30px 0px;text-align:center">
       <!--[if mso | IE]><table role="presentation"  border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:430px;" ><![endif]-->
       <div class="mj-column-px-430 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0"  width="100%">
         <tbody>
          <tr>
           <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0"  width="100%">
             <tbody>
              <tr>
               <td align="center" class="width100p" style="font-size:0px;padding:0;word-break:break-word">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:100%;border:none">
                 <tr>
                  <td valign="top" align="center" class="width100p" style="padding:0px 0px 0px;font-size:0px;line-height:0px">
                   <img class="width100p" src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" width="428" height="auto" style="display:block;mso-line-height-rule:exactly;border:0;height:auto;font-size:0px;line-height:0px;border:0" alt="Spruce mobile application and Debit card">
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </tbody>
            </table>
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <!--[if mso | IE]></td></tr></table><![endif]-->
      </td>
     </tr>
    </tbody>
   </table>
  </div>  
    `;
    
    
    const stored_text = `
    <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#003512" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#808080;background-color:#ffffff;margin:0px auto;border-radius:0px;max-width:600px">
     <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" style="background:#808080;background-color:#ffffff;width:100%;border-radius:0px">
      <tbody>
       <tr>
        <td class="footerpad" style="direction:ltr;font-size:0px;padding:0px 70px 0px;text-align:center">
         <!--[if mso | IE]><table role="presentation"  border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:460px;" ><![endif]-->
         <div class="mj-column-px-460 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
          <table role="presentation"  border="0" cellpadding="0" cellspacing="0" width="100%">
           <tbody>
            <tr>
             <td style="border-radius:0px;vertical-align:top;padding:0">
              <table role="presentation"  border="0" cellpadding="0" cellspacing="0" width="100%">
               <tbody>
                <tr>
                 <td align="center" style="font-size:0px;padding:0px;word-break:break-word">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:35px;font-weight:400;letter-spacing:0px;line-height:0px;color:#F0EEE1;text-align:center;">
                    <p class="mobile_text" role="contentinfo" style="padding:0;font-family:Times New Roman,Arial,Helvetica,sans-serif;font-size:55px;line-height:61px;font-weight:400;letter-spacing:0px;color:#000000;margin:0px;">What is Lorem Ipsum?</p>
                  </div>
                 </td>
                </tr>
                 <tr>
                 <td align="center" style="font-size:0px;padding:40px 0px 0px;word-break:break-word">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:35px;font-weight:400;letter-spacing:0px;line-height:0px;color:#F0EEE1;text-align:center;">
                    <p class="mobile_text" role="contentinfo" style="padding:0;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:25px;font-weight:400;letter-spacing:0px;color:#000;margin:0px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                 </td>
                </tr>
               </tbody>
              </table>
             </td>
            </tr>
           </tbody>
          </table>
         </div>
         <!--[if mso | IE]></td></tr></table><![endif]-->
        </td>
       </tr>
      </tbody>
     </table>
    </div>
    `;
    
    const stored_button = `
    <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#003512" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#808080;background-color:#ffffff;margin:0px auto;max-width:600px">
      <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#808080;background-color:#ffffff;width:100%">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:0px 30px;text-align:center">
              <!--[if mso | IE]><table role="presentation"  border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
              <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0"  width="100%">
                  <tbody>
                    <tr>
                      <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0"  width="100%">
                          <tbody>
                            <tr>
                              <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
                                <table role="presentation"  class="width100p" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                              <tr>
                                <td style="padding:0px 30px 40px;background-color:#ffffff">
                                  <div align="center">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:65px;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:600;v-text-anchor:middle;width:360px;color:#ffffff" arcsize="45%" stroke="false" fillcolor="#003512"><w:anchorlock/><center><![endif]-->
                                    <a alias="PrimaryCTA_Get Started" target="_blank" class="widthbutton btn-color-spruce" href="#"  style="background-color:#000000;border-radius:30px;color:#ffffff;display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:19px;font-weight:600;line-height:65px;text-align:center;text-decoration:none;width:360px;-webkit-text-size-adjust:none">Get started</a>
                                    <!--[if mso]></center></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
    </div> 
    `;
    
    
    const stored_two_col = `
    <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#003512" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="background:#808080;background-color:#ffffff;margin:0px auto;border-radius:0px;max-width:600px">
   <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#808080;background-color:#ffffff;width:100%;border-radius:0px">
    <tbody>
     <tr>
      <td class="footerpad1" style="direction:ltr;font-size:0px;padding:0px;text-align:center">
       <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="520px" ><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:460px;" width="520" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
       <div style="background:#808080;background-color:#ffffff;margin:0px auto;border-radius:0px 0px 30px 30px;max-width:600px">
        <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#808080;background-color:#ffffff;width:100%;border-radius:20px 20px 0px 0px;">
         <tbody>
          <tr>
           <td style="direction:ltr;font-size:0px;padding:40px;text-align:center">
            <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:520px;" ><![endif]-->
            <div class="mj-column-px-520 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
             <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
              <tbody>
               <tr>
                <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
                 <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
                  <tbody>
                   <tr>
                    <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                     <table role="presentation"  cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:100%;border:none">
                      <tr>
                       <td valign="middle" class="" width="60" style="padding:0px 0px;"><img height="auto" src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="60" class="" alt="Number 1"></td>
                        <td valign="middle" align="left">
                          <table role="presentation"  cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td align="left" style="font-size:0px;word-break:break-word;padding:0px 0px 0px 15px">
                        <div style="word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:22px;text-align:left;font-weight:600;letter-spacing:0px;color:#000000">
                          <p class="hovercontainer" role="contentinfo" style="padding:0;margin:0;word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:24px;text-align:left;font-weight:600;letter-spacing:0px;color:#003512" margin="0px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                       </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                     </table>
                    </td>
                   </tr>
                  </tbody>
                 </table>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
           </td>
          </tr>
          <tr>
           <td  style="direction:ltr;font-size:0px;padding:0px 30px 35px 30px;text-align:center">
            <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:420px;" ><![endif]-->
            <div class="mj-column-px-420 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
             <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
              <tbody>
               <tr>
                <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
                 <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
                  <tbody>
                   <tr>
                    <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                     <table role="presentation"  cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:100%;border:none">
                      <tr>
                       <td valign="middle" class="" width="60" style="padding:0px 0px;"><img height="auto" src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="60" class="" alt="Number 1"></td>
                        <td valign="middle" align="left">
                          <table role="presentation"  cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td align="left" style="font-size:0px;word-break:break-word;padding:0px 0px 0px 15px">
                        <div style="word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:22px;text-align:left;font-weight:600;letter-spacing:0px;color:#000000">
                          <p class="hovercontainer" role="contentinfo" style="padding:0;margin:0;word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:24px;text-align:left;font-weight:600;letter-spacing:0px;color:#003512" margin="0px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                       </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                     </table>
                    </td>
                   </tr>
                  </tbody>
                 </table>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
           </td>
          </tr>
          <tr>
           <td  style="direction:ltr;font-size:0px;padding:0px 30px 40px 30px;text-align:center">
            <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:420px;" ><![endif]-->
            <div class="mj-column-px-420 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
             <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
              <tbody>
               <tr>
                <td style="background-color:#ffffff;border-radius:0px;vertical-align:top;padding:0">
                 <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
                  <tbody>
                   <tr>
                    <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                     <table role="presentation"  cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:100%;border:none">
                      <tr>
                       <td valign="middle" class="" width="60" style="padding:0px 0px;"><img height="auto" src="https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png" style="border:0;display:block;outline:0;text-decoration:none;height:auto;width:100%;font-size:13px" width="60" class="" alt="Number 1"></td>
                        <td valign="middle" align="left">
                          <table role="presentation"  cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td align="left" style="font-size:0px;word-break:break-word;padding:0px 0px 0px 15px">
                        <div style="word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:22px;text-align:left;font-weight:600;letter-spacing:0px;color:#000000">
                          <p class="hovercontainer" role="contentinfo" style="padding:0;margin:0;word-break:break-word;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:24px;text-align:left;font-weight:600;letter-spacing:0px;color:#003512" margin="0px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                       </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                     </table>
                    </td>
                   </tr>
                  </tbody>
                 </table>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
      </td>
     </tr>
    </tbody>
   </table>
  </div>
    `;


    


    const header_col = `
    <div style="display:none;white-space:nowrap;font:15px courier;color:#fff">Spruce helps you be good with money.  
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
   &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
   &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
     <!--[if mso | IE]><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
     <div style="margin:0px auto;max-width:600px">
      <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="width:100%">
       <tbody>
        <tr>
         <td style="direction:ltr;font-size:0px;padding:20px 0px 0px;text-align:center">
          <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
           <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
            <tbody>
             <tr>
              <td style="background-color:#fff;vertical-align:top;padding:0">
               <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
                <tbody>
                 <tr>
                  <td align="right" style="font-size:0px;padding:0px 25px 15px 0px;word-break:break-word">
                   <div style="font-family:Arial,Helvetica,sans-serif;font-size:9px;line-height:15px;text-align:right;color:#6e6e6e"><a href="#" target="_blank" id="HT_view_in_Browser"  style="color:#6e6e6e;text-decoration:underline">View in Browser</a></div>
                  </td>
                 </tr>
                </tbody>
               </table>
              </td>
             </tr>
            </tbody>
           </table>
          </div>
          <!--[if mso | IE]></td></tr></table><![endif]-->
         </td>
        </tr>
       </tbody>
      </table>
     </div>
      <!--[if mso | IE]></td></tr></table><table role="presentation"   align="center" border="0" cellpadding="0" cellspacing="0" class=""  style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;border-radius:0px;max-width:600px">
     <table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0"  style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0px">
      <tbody>
       <tr>
        <td class="logopaddleft" width="30%" style="direction:ltr;font-size:0px;padding:20px 0px 20px 30px;text-align:center;width:30%;">
         <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><![endif]-->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="left" width="60" style="border-radius:0px">
           <tr>
            <td valign="top" align="left" style="font-family:Arial,sans-serif,Helvetica;font-weight:400;font-size:12px;color:#000;line-height:14px;">
             <img src="https://static.thenounproject.com/png/1269202-200.png" width="60" height="auto" style="display:block" alt="Header left logo">Logo left
            </td>
           </tr>
          </table>
         <!--[if mso | IE]></tr></table><![endif]-->
        </td>
         <td width="70%" style="direction:ltr;font-size:0px;padding:0px;text-align:center;width:70%;">
           <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><![endif]-->
             <table role="presentation"   align="right" border="0" cellpadding="0" cellspacing="0"  style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:0px">
             <tr>
               <td class="textpaddright" align="right"  style="font-family:Arial,sans-serif,Helvetica;font-weight:400;font-size:12px;color:#000;line-height:14px;padding:23px 30px 23px 30px;word-break:break-word">
                  <img src="https://static.thenounproject.com/png/1269202-200.png" width="60" height="auto" style="display:block" alt="Header Right logo">Logo right
                 </td>
             </tr>
         </table>
           <!--[if mso | IE]></tr></table><![endif]-->
         </td>
       </tr>
      </tbody>
     </table>
    </div>
    `;


    const footer_col = `
  <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="paddgingsocial-outlook"  style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div class="paddgingsocial" style="background:#fff;background-color:#fff;margin:0px auto;max-width:600px">
   <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#fff;background-color:#fff;width:100%">
    <tbody>
     <tr>
      <td style="direction:ltr;font-size:0px;padding:40px 60px 30px;text-align:center">
       <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:240px;" ><![endif]-->
       <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
        <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
         <tbody>
          <tr>
           <td style="vertical-align:top;padding:0">
            <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
             <tbody>
              <tr>
               <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                <table role="presentation"  cellpadding="0" cellspacing="0" width="210" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:210px;border:none">
                 <tr>
                  <td width="55" height="55" align="left" style="font-size:0px;line-height:0px"><img alt='Social_Media_Icon' width='54' height='54' src='https://static.thenounproject.com/png/1269202-200.png' style='display:block;width:55px;height:55px;border:0px;'/></td>
                  <td width="55" height="55" align="center" style="font-size:0px;line-height:0px"><img alt='Social_Media_Icon' width='54' height='54' src='https://static.thenounproject.com/png/1269202-200.png' style='display:block;width:55px; height:55px;border:0px;'/></td>
                  <td align="right" width="55" height="55" style="font-size:0px;line-height:0px"><img alt='Social_Media_Icon' width='54' height='54' src='https://static.thenounproject.com/png/1269202-200.png' style='display:block;width:55px; height:55px;border:0px;'/></td>
                 </tr>
                </table>
               </td>
              </tr>
             </tbody>
            </table>
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <!--[if mso | IE]></td></tr></table><![endif]-->
      </td>
     </tr>
    </tbody>
   </table>
  </div> 
  <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class=""  style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="background:#fff;background-color:#fff;margin:0px auto;max-width:600px">
   <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#fff;background-color:#fff;width:100%">
    <tbody>
     <tr>
      <td style="direction:ltr;font-size:0px;padding:0px 0px 30px;text-align:center">
       <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="navwidth-outlook" style="vertical-align:top;width:600px;" ><![endif]-->
       <div class="mj-column-px-600 mj-outlook-group-fix navwidth" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
        <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
         <tbody>
          <tr>
           <td style="vertical-align:top;padding:0">
            <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
             <tbody>
              <tr>
               <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                <table role="presentation"  class="width100p" cellpadding="0" cellspacing="0" width="50%" border="0" style="color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:0px;line-height:0px;table-layout:auto;width:50%;border:none">
                 <tr>
                  <td valign="top" class="width25" align="right" style="font-family:Arial,sans-serif,Helvetica;font-weight:400;font-size:12px;color:#000;line-height:14px;">Lorem Ipsum</td>
                  <td valign="middle" align="center" style="font-family:Arial,sans-serif,Helvetica;font-weight:700;font-size:12px;color:#000;line-height:14px;width:22px">&bull;</td>
                  <td valign="top" class="width25" align="center" style="font-family:Arial,sans-serif,Helvetica;font-weight:400;font-size:12px;color:#000;line-height:14px;">Lorem Ipsum</td>
                  <td valign="middle" align="center" style="font-family:Arial,sans-serif,Helvetica;font-weight:700;font-size:12px;color:#000;line-height:14px;width:22px">&bull;</td>
                  <td valign="top" class="width25" align="left" style="font-family:Arial,sans-serif,Helvetica;font-weight:400;font-size:12px;color:#000;line-height:14px;">Lorem Ipsum</td>
                 </tr>
                </table>
               </td>
              </tr>
             </tbody>
            </table>
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <!--[if mso | IE]></td></tr></table><![endif]-->
      </td>
     </tr>
    </tbody>
   </table>
  </div>
  <!--[if mso | IE]></td></tr></table><table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0" class="paddginglegalcopy-outlook" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div class="paddginglegalcopy" style="background:#fff;background-color:#fff;margin:0px auto;max-width:600px">
   <table role="presentation"  align="center" border="0" cellpadding="0" cellspacing="0"  style="background:#fff;background-color:#fff;width:100%">
    <tbody>
     <tr>
      <td class="footerpad" style="direction:ltr;font-size:0px;padding:0;padding-bottom:30px;padding-left:60px;padding-right:60px;padding-top:0px;text-align:center">
       <!--[if mso | IE]><table role="presentation"   border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:480px;" ><![endif]-->
       <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
        <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
         <tbody>
          <tr>
           <td style="vertical-align:top;padding:0">
            <table role="presentation"  border="0" cellpadding="0" cellspacing="0"  width="100%">
             <tbody>
              <tr>
               <td align="center" style="font-size:0px;padding:0;word-break:break-word">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:9.5px;font-style:normal;font-weight:300;line-height:15px;text-align:center;color:#000">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 <br>
                 <br>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  <br>
                  <br>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  <br>
                  <br>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 <br>
                 <br>Lorem Ipsum
                 <br>is simply dummy text
                 <br>of the printing
                 <br>and typesetting industry.
                 <br>
                 <br>Lorem Ipsum
                 <br>is simply dummy text
                 <br>of the printing and typesetting industry.
                 <br>
                 <br>To unsubscribe from these emails, click here.
                </div>
               </td>
              </tr>
             </tbody>
            </table>
           </td>
          </tr>
         </tbody>
        </table>
       </div>
       <!--[if mso | IE]></td></tr></table><![endif]-->
      </td>
     </tr>
    </tbody>
   </table>
  </div>
  <!--[if mso | IE]></td></tr></table><![endif]-->
    `;

// set the text content of the associated DOM structure
if (element.id === "image1") {
  // set the innerHTML of the text content div
  textContent.innerHTML = stored_image;

} else if (element.id === "image2") {
  // set the innerHTML of the text content div
  textContent.innerHTML = stored_text;
} else if (element.id === "image3") {
  // set the innerHTML of the text content div
  textContent.innerHTML = stored_button;
} else if (element.id === "image4") {
  // set the innerHTML of the text content div
  textContent.innerHTML = stored_two_col;
} else if (element.id === "image5") {
  // set the innerHTML of the text content div
  textContent.innerHTML = stored_mul_col;
} else if (element.id === "image8") {
  // set the innerHTML of the text content div
  textContent.innerHTML = header_col;
} else if (element.id === "image9") {
  // set the innerHTML of the text content div
  textContent.innerHTML = footer_col;
}  


  // create a div to hold the associated DOM structure
  var domStructure = document.createElement("div");

  // append the text content and associated DOM structure to the container
  container.appendChild(textContent);
  container.appendChild(domStructure);

  // append the container to the target
  target.appendChild(container);



  // create a new div to hold the code
  var codeDiv = document.createElement("div");
  codeDiv.textContent = container.outerHTML;

  // // append the code to the #code element
  // var codeContainer = document.getElementById("code");
  // codeContainer.appendChild(codeDiv);
}


function onElementDoubleClick(event) {
  var element = event.target;
  element.classList.add('selected');
  

  var editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', onEditButtonClick);

  var removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.addEventListener('click', onRemoveButtonClick);

  var cancelButton = document.createElement('button');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.classList.add('cancel-button');
  cancelButton.addEventListener('click', onCancelButtonClick);

  var buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  buttonContainer.appendChild(cancelButton);

  element.appendChild(buttonContainer);
}


function displayCode(element) {
  var codeElement = document.getElementById("code");
  codeElement.innerHTML = element.outerHTML;
}

// // add event listener to the #code element to update #parent2 on input
// var codeElement = document.getElementById("code");
// codeElement.addEventListener("input", function() {
//   var parent2 = document.getElementById("parent2");
//   parent2.innerHTML = codeElement.textContent;
// });


function downloadDiv() {
  const div = document.getElementById('parent2');
  const divContent = div.outerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  if (!confirm('Are you sure you want to download this Email?')) {
    return;
  }

  const newDoc = document.implementation.createHTMLDocument();
  newDoc.documentElement.innerHTML = divContent;

  const htmlContent = newDoc.documentElement.outerHTML;
  const filename = 'my-email.html';

  const blob = new Blob([htmlContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Clean up the URL object
  URL.revokeObjectURL(url);
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', downloadDiv);

 


//



// Keep track of the previously selected element
var previousSelectedElement = null;

// Get a reference to the target div and the destination div
var targetDiv = document.getElementById('parent2');
var destinationDiv = document.getElementById('code');

// Create a temporary div to store the selected element's code
var tempDiv = document.createElement('div');
tempDiv.style.display = 'none';
document.body.appendChild(tempDiv);

// Add a click event listener to the target div
targetDiv.addEventListener('click', function(event) {
  // Get a reference to the clicked element
  var element = event.target;
  
  // If the clicked element is not within the target div, deselect the previously selected element (if any) and return
  if (!targetDiv.contains(element)) {
    if (previousSelectedElement) {
      // Push the code from the temporary div to the previously selected element
      previousSelectedElement.innerHTML = tempDiv.firstChild.innerHTML;
      
      // Delete the temporary div
      tempDiv.remove();
      
      // Deselect the previously selected element
      previousSelectedElement.classList.remove('selected');
      previousSelectedElement = null;
      
      // Clear the contents of the destination div
      destinationDiv.textContent = '';

    }
    return;
  }
  
  // Remove the 'selected' class from the previously selected element
  if (previousSelectedElement) {
    previousSelectedElement.classList.remove('selected');
  }
  
  // Add the 'selected' class to the newly selected element
  element.classList.add('selected');
  
  // Update the previously selected element to the current element
  previousSelectedElement = element;
  
  // Clear the contents of the temporary div
  tempDiv.innerHTML = '';
  
  // Create a pre element to wrap the selected element's code
  var codeElement = document.createElement('pre');
  codeElement.textContent = element.outerHTML;
  
  // Append the code element to the temporary div
  tempDiv.appendChild(codeElement);
  
  // Clear the contents of the destination div
  destinationDiv.textContent = '';
  
  // Append the code element from the temporary div to the destination div
  destinationDiv.appendChild(tempDiv.firstChild.cloneNode(true));

  
});


// // Get a reference to the clicked element
// var element = event.target;

// // Add a click event listener to the document to deselect the selected element when the user clicks anywhere else on the screen
// document.addEventListener('click', function(event) {
  
  
//   // If the clicked element is within the target or destination div, return
//   if (targetDiv.contains(element) || destinationDiv.contains(element)) {
//     return;
//   }
  
//   // Deselect the previously selected element (if any)
//   if (previousSelectedElement) {
//     // Get the code from the temporary div
//     var code = tempDiv.innerHTML;

    
   

    

//     // Clear the contents of the destination div
//     destinationDiv.textContent = '';


//     // Reset the reference to the previously selected element to null
//     // previousSelectedElement = null;
   
//   }
// });



const saveButton = document.getElementById('save_btn');

saveButton.addEventListener('click', () => {
  console.log('Button clicked!');

  // Deselect the previously selected element
  previousSelectedElement.classList.remove('selected');
  // Your code here

  var modDiv = destinationDiv.textContent;


    // Replace HTML entities with their corresponding characters
    modDiv = modDiv.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

    // // Push the code to the previously selected element
    previousSelectedElement.innerHTML = modDiv;

    console.log("code is modified")
    console.log(modDiv)


    destinationDiv.textContent = '';
});

















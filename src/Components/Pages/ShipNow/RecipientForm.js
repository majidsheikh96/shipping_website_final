import React from "react";
import { useFormContext } from "react-hook-form";

const RecipientForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
          <div className="bg-white w-full md:rounded-xl">
            <div className="w-[85%] md:w-[50%] mx-auto pt-6 md:pt-8 pb-3">
              <div className="w-full flex flex-col group">
                <label
                  for="recipientName"
                  class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                >
                  Recipient's Name
                </label>
                <div
                  id="recipientNamecontainer"
                  className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${errors.recipient?.name && "border-rose-500"
                    }`}
                >
                  <div class="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8"
                      maxLength="80"
                      id="recipientName"
                      type="text"
                      {...register("recipient.name", { required: 'Required' })}
                    />
                  </div>
                  {errors.recipient?.name && <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">Required</p>}
                </div>
              </div>
              <div class="w-full flex flex-col group">
                <label
                  for="recipientEmail"
                  class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                >
                  Recipient's Email
                </label>
                <div
                  id="recipientEmailcontainer"
                  class="mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border"
                >
                  <div class="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8"
                      maxLength="80"
                      id="recipientEmail"
                      type="email"
                      {...register("recipient.email")}
                    />
                  </div>
                  <p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                </div>
              </div>
              <div class="w-full flex flex-col group">
                <label
                  for="recipientCountry"
                  class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                >
                  Country
                </label>
                <div
                  id="recipientCountrycontainer"
                  className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${errors.recipient?.country && 'border-rose-500'}`}
                >
                  {
                    watch("recipient.country") && <svg
                      viewBox="0 0 22 22"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] inline-block absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                    >
                      <circle
                        r="10"
                        transform="matrix(1 0 0 -1 11 11)"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M6 11.9375L9.04348 15L16 8"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  }
                  <div class="absolute h-full w-full flex items-center top-0 z-[1]">
                    <select
                      id="recipientCountry"
                      class="focus:outline-none w-full h-full rounded-xl appearance-none bg-transparent hover:cursor-pointer pl-3"
                      tabindex="0"
                      {...register("recipient.country", { required: 'Required' })}
                    >
                      <option value="" disabled></option>
                      <optgroup label="Frequent Picks">
                        <option value="AU">Australia</option>
                        <option value="BE">Belgium</option>
                        <option value="CA">Canada</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="ID">Indonesia</option>
                        <option value="JP">Japan</option>
                        <option value="MY">Malaysia</option>
                        <option value="NL">Netherlands</option>
                        <option value="NZ">New Zealand</option>
                        <option value="PH">Philippines</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </optgroup>
                      <optgroup label="All">
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AG">Antigua &amp; Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia</option>
                        <option value="BQ">Bonaire</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BR">Brazil</option>
                        <option value="BN">Brunei</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="CG">Congo</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CW">Curacao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="CD">
                          Democratic Republic of the Congo
                        </option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="TL">East Timor</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="SZ">Eswatini</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GN">Guinea</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="CI">Ivory Coast / Cote d'Ivoire</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Laos</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macau</option>
                        <option value="MK">Macedonia</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="NA">Namibia</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestine</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="QA">Qatar</option>
                        <option value="RO">Romania</option>
                        <option value="RW">Rwanda</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="SX">Saint Maarten</option>
                        <option value="MF">Saint Martin</option>
                        <option value="VC">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="WS">Samoa</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="KR">South Korea</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SR">Suriname</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan</option>
                        <option value="TZ">
                          Tanzania, United Republic of Tanzania
                        </option>
                        <option value="TH">Thailand</option>
                        <option value="TG">Togo</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="UG">Uganda</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                      </optgroup>
                    </select>
                    {errors.recipient?.country && <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">Required</p>}
                  </div>
                  <div class="absolute right-0 pr-[1.6rem] h-full flex items-center pointer-events-none z-[2] group-focus-within:invisible">
                    <svg
                      width="16px"
                      height="12px"
                      class="w-[14px] h-[9px] mt-1 mr-2.5"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M1 1L8 9L15 1"
                        stroke="#373F41"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <hr class="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple mr-2" />
                  </div>
                  <p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                </div>
              </div>
              <div class="group">
                <label
                  class="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple"
                  for="recipientMobileNo"
                >
                  Recipient's Mobile
                </label>
                <div className={`flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-border-dark-gray shadow-border ${(errors.recipient?.countryCallCode || errors.recipient?.mobile) && 'border-rose-500'}`}>
                  <div class="relative text-gray-4 text-sm">
                    <label for="country-call-code" hidden>
                      country calling code
                    </label>
                    <select
                      id="country-call-code"
                      name="country-call-code"
                      class="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer"
                      tabindex="-1"
                      {...register("recipient.countryCallCode", { required: 'Required' })}
                    >
                      <option value="" disabled></option>
                      <option value="AF/+93">Afghanistan +93</option>
                      <option value="AL/+355">Albania +355</option>
                      <option value="DZ/+213">Algeria +213</option>
                      <option value="AS/+1684">American Samoa +1684</option>
                      <option value="AD/+376">Andorra +376</option>
                      <option value="AO/+244">Angola +244</option>
                      <option value="AI/+1264">Anguilla +1264</option>
                      <option value="AG/+1268">
                        Antigua &amp; Barbuda +1268
                      </option>
                      <option value="AR/+54">Argentina +54</option>
                      <option value="AM/+374">Armenia +374</option>
                      <option value="AW/+297">Aruba +297</option>
                      <option value="AU/+61">Australia +61</option>
                      <option value="AT/+43">Austria +43</option>
                      <option value="AZ/+994">Azerbaijan +994</option>
                      <option value="BS/+1242">Bahamas +1242</option>
                      <option value="BH/+973">Bahrain +973</option>
                      <option value="BD/+880">Bangladesh +880</option>
                      <option value="BB/+1246">Barbados +1246</option>
                      <option value="BY/+375">Belarus +375</option>
                      <option value="BE/+32">Belgium +32</option>
                      <option value="BZ/+501">Belize +501</option>
                      <option value="BJ/+229">Benin +229</option>
                      <option value="BM/+1441">Bermuda +1441</option>
                      <option value="BT/+975">Bhutan +975</option>
                      <option value="BO/+591">Bolivia +591</option>
                      <option value="BQ/+5997">Bonaire +5997</option>
                      <option value="BA/+387">
                        Bosnia and Herzegovina +387
                      </option>
                      <option value="BW/+267">Botswana +267</option>
                      <option value="BR/+55">Brazil +55</option>
                      <option value="BN/+673">Brunei +673</option>
                      <option value="BG/+359">Bulgaria +359</option>
                      <option value="BF/+226">Burkina Faso +226</option>
                      <option value="BI/+257">Burundi +257</option>
                      <option value="KH/+855">Cambodia +855</option>
                      <option value="CM/+237">Cameroon +237</option>
                      <option value="CA/+1">Canada +1</option>
                      <option value="CV/+238">Cape Verde +238</option>
                      <option value="KY/+1345">Cayman Islands +1345</option>
                      <option value="TD/+235">Chad +235</option>
                      <option value="CL/+56">Chile +56</option>
                      <option value="CN/+86">China +86</option>
                      <option value="CO/+57">Colombia +57</option>
                      <option value="CG/+242">Congo +242</option>
                      <option value="CK/+682">Cook Islands +682</option>
                      <option value="CR/+506">Costa Rica +506</option>
                      <option value="HR/+385">Croatia +385</option>
                      <option value="CW/+5999">Curacao +5999</option>
                      <option value="CY/+357">Cyprus +357</option>
                      <option value="CZ/+420">Czech Republic +420</option>
                      <option value="CD/+243">
                        Democratic Republic of the Congo +243
                      </option>
                      <option value="DK/+45">Denmark +45</option>
                      <option value="DJ/+253">Djibouti +253</option>
                      <option value="DM/+1767">Dominica +1767</option>
                      <option value="DO/+1849">Dominican Republic +1849</option>
                      <option value="TL/+670">East Timor +670</option>
                      <option value="EC/+593">Ecuador +593</option>
                      <option value="EG/+20">Egypt +20</option>
                      <option value="SV/+503">El Salvador +503</option>
                      <option value="ER/+291">Eritrea +291</option>
                      <option value="EE/+372">Estonia +372</option>
                      <option value="SZ/+268">Eswatini +268</option>
                      <option value="ET/+251">Ethiopia +251</option>
                      <option value="FO/+298">Faroe Islands +298</option>
                      <option value="FJ/+679">Fiji +679</option>
                      <option value="FI/+358">Finland +358</option>
                      <option value="FR/+33">France +33</option>
                      <option value="GF/+594">French Guiana +594</option>
                      <option value="PF/+689">French Polynesia +689</option>
                      <option value="GA/+241">Gabon +241</option>
                      <option value="GM/+220">Gambia +220</option>
                      <option value="GE/+995">Georgia +995</option>
                      <option value="DE/+49">Germany +49</option>
                      <option value="GH/+233">Ghana +233</option>
                      <option value="GI/+350">Gibraltar +350</option>
                      <option value="GR/+30">Greece +30</option>
                      <option value="GL/+299">Greenland +299</option>
                      <option value="GD/+1473">Grenada +1473</option>
                      <option value="GP/+590">Guadeloupe +590</option>
                      <option value="GU/+1671">Guam +1671</option>
                      <option value="GT/+502">Guatemala +502</option>
                      <option value="GN/+224">Guinea +224</option>
                      <option value="GY/+592">Guyana +592</option>
                      <option value="HT/+509">Haiti +509</option>
                      <option value="HN/+504">Honduras +504</option>
                      <option value="HK/+852">Hong Kong +852</option>
                      <option value="HU/+36">Hungary +36</option>
                      <option value="IS/+354">Iceland +354</option>
                      <option value="IN/+91">India +91</option>
                      <option value="ID/+62">Indonesia +62</option>
                      <option value="IQ/+964">Iraq +964</option>
                      <option value="IE/+353">Ireland +353</option>
                      <option value="IL/+972">Israel +972</option>
                      <option value="IT/+39">Italy +39</option>
                      <option value="CI/+225">
                        Ivory Coast / Cote d'Ivoire +225
                      </option>
                      <option value="JM/+1876">Jamaica +1876</option>
                      <option value="JP/+81">Japan +81</option>
                      <option value="JO/+962">Jordan +962</option>
                      <option value="KZ/+77">Kazakhstan +77</option>
                      <option value="KE/+254">Kenya +254</option>
                      <option value="KW/+965">Kuwait +965</option>
                      <option value="KG/+996">Kyrgyzstan +996</option>
                      <option value="LA/+856">Laos +856</option>
                      <option value="LV/+371">Latvia +371</option>
                      <option value="LB/+961">Lebanon +961</option>
                      <option value="LS/+266">Lesotho +266</option>
                      <option value="LR/+231">Liberia +231</option>
                      <option value="LY/+218">Libya +218</option>
                      <option value="LI/+423">Liechtenstein +423</option>
                      <option value="LT/+370">Lithuania +370</option>
                      <option value="LU/+352">Luxembourg +352</option>
                      <option value="MO/+853">Macau +853</option>
                      <option value="MK/+389">Macedonia +389</option>
                      <option value="MG/+261">Madagascar +261</option>
                      <option value="MW/+265">Malawi +265</option>
                      <option value="MY/+60">Malaysia +60</option>
                      <option value="MV/+960">Maldives +960</option>
                      <option value="ML/+223">Mali +223</option>
                      <option value="MT/+356">Malta +356</option>
                      <option value="MH/+692">Marshall Islands +692</option>
                      <option value="MQ/+596">Martinique +596</option>
                      <option value="MR/+222">Mauritania +222</option>
                      <option value="MU/+230">Mauritius +230</option>
                      <option value="MX/+52">Mexico +52</option>
                      <option value="FM/+691">Micronesia +691</option>
                      <option value="MD/+373">Moldova +373</option>
                      <option value="MC/+377">Monaco +377</option>
                      <option value="MN/+976">Mongolia +976</option>
                      <option value="ME/+382">Montenegro +382</option>
                      <option value="MS/+1664">Montserrat +1664</option>
                      <option value="MA/+212">Morocco +212</option>
                      <option value="MZ/+258">Mozambique +258</option>
                      <option value="NA/+264">Namibia +264</option>
                      <option value="NP/+977">Nepal +977</option>
                      <option value="NL/+31">Netherlands +31</option>
                      <option value="AN/+599">Netherlands Antilles +599</option>
                      <option value="NC/+687">New Caledonia +687</option>
                      <option value="NZ/+64">New Zealand +64</option>
                      <option value="NI/+505">Nicaragua +505</option>
                      <option value="NE/+227">Niger +227</option>
                      <option value="NG/+234">Nigeria +234</option>
                      <option value="MP/+1670">
                        Northern Mariana Islands +1670
                      </option>
                      <option value="NO/+47">Norway +47</option>
                      <option value="OM/+968">Oman +968</option>
                      <option value="PK/+92">Pakistan +92</option>
                      <option value="PW/+680">Palau +680</option>
                      <option value="PS/+970">Palestine +970</option>
                      <option value="PA/+507">Panama +507</option>
                      <option value="PG/+675">Papua New Guinea +675</option>
                      <option value="PY/+595">Paraguay +595</option>
                      <option value="PE/+51">Peru +51</option>
                      <option value="PH/+63">Philippines +63</option>
                      <option value="PL/+48">Poland +48</option>
                      <option value="PT/+351">Portugal +351</option>
                      <option value="QA/+974">Qatar +974</option>
                      <option value="RO/+40">Romania +40</option>
                      <option value="RU/+7">Russia +7</option>
                      <option value="RW/+250">Rwanda +250</option>
                      <option value="KN/+1869">
                        Saint Kitts and Nevis +1869
                      </option>
                      <option value="LC/+1758">Saint Lucia +1758</option>
                      <option value="SX/+1721">Saint Maarten +1721</option>
                      <option value="MF/+590">Saint Martin +590</option>
                      <option value="VC/+1784">
                        Saint Vincent and the Grenadines +1784
                      </option>
                      <option value="WS/+685">Samoa +685</option>
                      <option value="SA/+966">Saudi Arabia +966</option>
                      <option value="SN/+221">Senegal +221</option>
                      <option value="RS/+381">Serbia +381</option>
                      <option value="SC/+248">Seychelles +248</option>
                      <option value="SG/+65">Singapore +65</option>
                      <option value="SK/+421">Slovakia +421</option>
                      <option value="SI/+386">Slovenia +386</option>
                      <option value="ZA/+27">South Africa +27</option>
                      <option value="KR/+82">South Korea +82</option>
                      <option value="ES/+34">Spain +34</option>
                      <option value="LK/+94">Sri Lanka +94</option>
                      <option value="SR/+597">Suriname +597</option>
                      <option value="SE/+46">Sweden +46</option>
                      <option value="CH/+41">Switzerland +41</option>
                      <option value="SY/+963">Syrian Arab Republic +963</option>
                      <option value="TW/+886">Taiwan +886</option>
                      <option value="TZ/+255">
                        Tanzania, United Republic of Tanzania +255
                      </option>
                      <option value="TH/+66">Thailand +66</option>
                      <option value="TG/+228">Togo +228</option>
                      <option value="TO/+676">Tonga +676</option>
                      <option value="TT/+1868">
                        Trinidad and Tobago +1868
                      </option>
                      <option value="TN/+216">Tunisia +216</option>
                      <option value="TR/+90">Turkey +90</option>
                      <option value="TC/+1649">
                        Turks and Caicos Islands +1649
                      </option>
                      <option value="UG/+256">Uganda +256</option>
                      <option value="UA/+380">Ukraine +380</option>
                      <option value="AE/+971">United Arab Emirates +971</option>
                      <option value="GB/+44">United Kingdom +44</option>
                      <option value="US/+1">United States +1</option>
                      <option value="UY/+598">Uruguay +598</option>
                      <option value="UZ/+998">Uzbekistan +998</option>
                      <option value="VU/+678">Vanuatu +678</option>
                      <option value="VE/+58">Venezuela +58</option>
                      <option value="VN/+84">Vietnam +84</option>
                      <option value="VG/+1284">
                        Virgin Islands, British +1284
                      </option>
                      <option value="VI/+1340">
                        Virgin Islands, U.S. +1340
                      </option>
                      <option value="WF/+681">Wallis and Futuna +681</option>
                      <option value="YE/+967">Yemen +967</option>
                      <option value="ZM/+260">Zambia +260</option>
                      <option value="ZW/+263">Zimbabwe +263</option>
                    </select>
                    <div
                      className="h-full flex items-center min-w-[40px] px-3 justify-center"
                      aria-hidden="true"
                    >
                      {watch("recipient.countryCallCode")}
                    </div>
                  </div>
                  <hr class="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple" />
                  <input
                    type="tel"
                    id="recipientMobileNo"
                    className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none"
                    {...register("recipient.mobile", { required: 'Required', minLength: 8, maxLength: 15 })}
                  />
                  {errors.recipient?.mobile && <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">Mobile Number must be of 8 to 15 digits</p>}
                  <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-[18px] inline-block absolute right-0.5 top-[50%] -translate-y-[50%] group-focus-within:invisible mr-2 stroke-dark-purple"
                  >
                    <circle
                      r="10"
                      transform="matrix(1 0 0 -1 11 11)"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="M6 11.9375L9.04348 15L16 8"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <p class="min-h-[1rem] text-xs text-error-red absolute top-10"></p>
                </div>
              </div>

              <div class="w-full flex flex-col group">
                <label
                  for="recipientAddress"
                  class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                >
                  Address
                </label>
                <div
                  id="recipientAddresscontainer"
                  className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${errors.recipient?.address && 'border-rose-500'}`}
                >
                  <div class="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8"
                      maxLength="80"
                      id="recipientAddress"
                      type="text"
                      {...register("recipient.address", { required: 'Required', maxLength: 80 })}
                    />
                  </div>
                  {errors.recipient?.address && <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">Required</p>}
                  <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    class="inline-block absolute right-0 mr-2 w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"
                  >
                    <circle
                      r="10"
                      transform="matrix(1 0 0 -1 11 11)"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="M6 11.9375L9.04348 15L16 8"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                </div>
              </div>

              <div class="w-full flex flex-col group">
                <label
                  for="recipientPostalCode"
                  class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                >
                  Postal Code
                </label>
                <div
                  id="recipientPostalCodecontainer"
                  className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${errors.recipient?.postal_code && 'border-rose-500'}`}
                >
                  <div class="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8"
                      maxLength="80"
                      id="recipientPostalCode"
                      type="text"
                      {...register("recipient.postal_code", { required: 'Required', maxLength: 80 })}
                    />
                  </div>
                  {
                    watch("recipient.postal_code") && <svg
                      viewBox="0 0 22 22"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] inline-block 
                absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                    >
                      <circle
                        r="10"
                        transform="matrix(1 0 0 -1 11 11)"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M6 11.9375L9.04348 15L16 8"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  }
                  <p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="w-full flex flex-col group">
                    <label
                      for="recipientCity"
                      class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                    >
                      City
                    </label>
                    <div
                      id="recipientCitycontainer"
                      className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-error-red shadow-border-error ${errors.recipient?.city && 'border-rose-500'}`}
                    >
                      <div class="relative flex items-center h-full z-[2] w-full">
                        <input
                          className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8"
                          maxLength="80"
                          id="recipientCity"
                          type="text"
                          {...register("recipient.city", { required: 'Required', maxLength: 80 })}
                        />
                      </div>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[18px] inline-block absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                      >
                        <circle
                          r="10"
                          transform="matrix(1 0 0 -1 11 11)"
                          stroke-width="2"
                        ></circle>
                        <path
                          d="M6 11.9375L9.04348 15L16 8"
                          stroke-width="2"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                      <p class="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="recipientState"
                    class="font-normal text-subheading-gray w-max group-focus-within:text-dark-purple"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    class="disabled:bg-gray-2 rounded-xl w-full h-10 mt-1"
                    id="recipientState"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
  );
};

export default RecipientForm;

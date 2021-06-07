import React, { useState } from 'react';
import axios from 'axios';









function Covid() {
    getData();
    const [num, setnum] = useState('0')
    const [statename, setStatename] = useState('0');
    const [totalConfirmed, settotalConfirmed] = useState('0');
    const [discharged, setdischarged] = useState('0');
    const [deaths, setdeaths] = useState('0');

  
    const [ItotalConfirmed, setItotalConfirmed] = useState('0');
    const [Idischarged, setIdischarged] = useState('0');
    const [Ideaths, setIdeaths] = useState('0');


    async function getData() {
        const res = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');


        // console.log(res.data.data.regional[num].loc)
        const Idata = res.data.data.summary;
        setItotalConfirmed(Idata.total);
        setIdischarged(Idata.discharged);
        setIdeaths(Idata.deaths);
          

        const cdata = res.data.data.regional[num];
        //  console.log(ddata)
        setStatename(cdata.loc)
        settotalConfirmed(cdata.totalConfirmed)
        setdischarged(cdata.discharged)
        setdeaths(cdata.deaths)
        console.log(num);



    };
    // setnum(19);
    
    
    return (
        <>
            <div className="form-div">
                <div className='cdata'>

                    <h2>Covid data</h2>
                    <select className='covi-select' onChange={(e) => { setnum(e.target.value) }} >
                        <option value='0'>select state</option>
                        <option value='0' >Andaman and Nicobar Islands</option>
                        <option value='1' >Andhra pradesh</option>
                        <option value='2' >Arunachal Pradesh</option>
                        <option value='3' >Assam</option>
                        <option value='4' >Bihar</option>
                        <option value='5' >Chandigarh</option>
                        <option value='6' >Chhattisgarh</option>
                        <option value='7' >Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value='8' >Delhi</option>
                        <option value='9' >Goa</option>
                        <option value='10' >Gujarat</option>
                        <option value='11' >Haryana</option>
                        <option value='12' >Himachal Pradesh</option>
                        <option value='13' >Jammu and Kashmir</option>
                        <option value='14' >Jharkhand</option>
                        <option value='15' >Karnataka</option>
                        <option value='16' >Kerala</option>
                        <option value='17' >Ladakh</option>
                        <option value='18' >Lakshadweep</option>
                        <option value='19' >Madhya Pradesh</option>
                        <option value='20' >Maharashtra</option>
                        <option value='21' >Manipur</option>
                        <option value='22' >Meghalaya</option>
                        <option value='23' >Mizoram</option>
                        <option value='24' >Nagaland</option>
                        <option value='25' >Odisha</option>
                        <option value='26' >Puducherry</option>
                        <option value='27' >Punjab</option>
                        <option value='28' >Rajasthan</option>
                        <option value='29' >Sikkim</option>
                        <option value='30' >Tamil Nadu</option>
                        <option value='31' >Telangana</option>
                        <option value='32' >Tripura</option>
                        <option value='33' >Uttarakhand</option>
                        <option value='34' >Uttar Pradesh</option>
                        <option value='35' >West Bengal</option>
                        <option value='36' ></option>
                      
                    </select>
                    <h3 >{statename}</h3>



                    <div id='r1' className='covidrows'>
                        <p >totalConfirmed  </p>
                        <span id='r1d'>{totalConfirmed}</span>

                    </div>
                    <div id='r2' className='covidrows'>

                        <p>discharged</p>
                        <span>{discharged}</span>


                    </div>
                    <div id='r3' className='covidrows'> 
                         <p>deaths</p>
                        <span>. {deaths} .</span>
                    </div>

                    <h3 id='ai'>All INDIA</h3>
                      
                    <div id='r4' className='covidrows'>
                        <p >totalConfirmed</p>
                        <span id='r1d'>{ItotalConfirmed}</span>

                    </div>
                    <div id='r5' className='covidrows'>

                        <p>discharged</p>
                        <span>{Idischarged}</span>


                    </div>
                    <div id='r6' className='covidrows'> 
                         <p> deaths </p>
                        <span>. {Ideaths}  .</span>
                    </div>














                </div>
            </div>

        </>
    )
}
export default Covid
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Annual = () => {
  return (
    <div>
    
     <Box sx={{ width: '100%', margin:'100px 0px' }}>
      <Grid container rowSpacing={1} className='grid' >
      <Grid  item xs={12} md={5}>
          <div className='p-card'>
            <h2>Diamond</h2>
             <p>Perfect for small marketing teams</p>

             <p><span className='taka'>$89</span>.99 / annually</p>
             <hr />
             <li> <i class="fas fa-check"></i> Course Discussion</li>
             <li><i class="fas fa-check"></i> Content Library </li>
             <li><i class="fas fa-check"></i> 1-hour Mentorship</li>
             <li><i class="fas fa-check"></i> Online Course</li>
            
             <button>Get started</button>
          </div>
        </Grid>
        <Grid  item xs={12} md={5}>
          <div className='p-card'>
            <h2>Gold</h2>
             <p>Perfect for small marketing teams</p>

             <p><span className='taka'>$99</span>.99 / annually</p>
             <hr />
             <li> <i class="fas fa-check"></i> Course Discussion</li>
             <li><i class="fas fa-check"></i> Content Library </li>
             <li><i class="fas fa-check"></i> 1-hour Mentorship</li>

             <button>Get started</button>
          </div>
        </Grid>
       
      
       
       
      </Grid>
    </Box>
  
    </div>
  );
};

export default Annual;
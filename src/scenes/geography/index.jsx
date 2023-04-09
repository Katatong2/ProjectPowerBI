import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Button, IconButton, Typography } from "@mui/material";
import { mockTransactions } from "../../data/mockData";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Author" subtitle="บุคลากรที่ตีพิมพ์งานวิจัยเกี่ยวกับสาขาคอมพิวเตอร์ของมหาวิทยาลัยขอนแก่น" />

        <Box>
          
        </Box>
      </Box>

     {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        
        {/* ROW 2 */}
       
        <Box
          gridColumn="span 12"
          gridRow="span 8"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
             บุคลากรที่ทำงานวิจัยในสาขาคอมพิวเตอร์
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}  </Box>
              <Box 
                backgroundColor={colors.blueAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                
              >
              <IconButton href= {transaction.href} />
                {transaction.cost}
               
              </Box>
            </Box>
          ))}
        </Box>

      
      </Box>
    </Box>
  );
};

export default Geography;

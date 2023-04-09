import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import ArticleIcon from '@mui/icons-material/Article';
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import ProgressCircle from "../../components/ProgressCircle";
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <Button component={Link} to="/new-page">
      Router Link
    </Button>
  );
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Information about the research" subtitle="khon kaen university" />

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
        {/* ROW 1 */}
        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
         <StatBox
            title="24,919 งานวิจัย" 
            subtitle="จำนวนงานวิจัยทั้งหมด"
            progress="0.75"
            increase="+14%"



            icon={
              <div>
              <IconButton href="https://www.scopus.com/results/results.uri?sort=plf-f&src=s&st1=Khon+kaen+university&sid=3ee20ef85ead4909ee63b46cf34577c8&sot=b&sdt=b&sl=25&s=ALL%28Khon+kaen+university%29&origin=searchbasic&editSaveSearch=&yearFrom=Before+1960&yearTo=Present" target="_blank">
              <DescriptionIcon sx ={{ color: colors.greenAccent[600], fontSize: "26px" }}
               />
              </IconButton>
              </div>
            }
          />
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,743"
            subtitle="จำนวนงานวิจัยสาขาวิชาคอมพิวเตอร์"
            progress="0.95"
            increase="+3.96% in this year"

            icon={
              <div>
              <IconButton href="https://www.scopus.com/results/results.uri?sort=plf-f&src=s&st1=Khon+kaen+university&nlo=&nlr=&nls=&sid=f01f0fe7f7e4b28103cb7c87a613dc1e&sot=b&sdt=cl&cluster=scosubjabbr%2c%22COMP%22%2ct&sl=25&s=ALL%28Khon+kaen+university%29&origin=resultslist&zone=leftSideBar&editSaveSearch=&txGid=e1642618117f03145a1c26d4cd18c5cf" target="_blank">
              <ArticleIcon sx ={{ color: colors.greenAccent[600], fontSize: "26px" }}
               />
              </IconButton>
              </div>
            }
          />
        </Box>
       
        
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
          จำนวนงานวิจัยในแต่ละสาขาที่เกี่ยวข้องกับสาขาคอมพิวเตอร์<br></br>

          <br></br></Typography>
              <Box height="250px" m="-20px 0 0 0">
            <PieChart isDashboard={true} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
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
             TOP 10 บุคลากรที่ทำงานวิจัยในสาขาคอมพิวเตอร์
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

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
           
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
              จำนวนการตีพิมพ์งานวิจัยสาขาคอมพิวเตอร์ของมหาวิทยาลัยขอนแก่นในแต่ละปี
              </Typography>
            </Box>

          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            จำนวนงานวิจัยของแต่ละมหาวิทยาลัยในสาขาคอมพิวเตอร์
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

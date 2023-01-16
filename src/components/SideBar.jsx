import { Stack } from "@mui/material"
import { categories } from "../utils/constants"

const selectCategory = 'New';

const Sidebar = () => (
 <Stack
        direction="row"
        sx={{
            overflowY : 'auto',
            height: {sx: 'auto', md:'95%'},
            flexDirection:{md:'column'},

        }}
    >
        {categories.map((category) => (
            <button 
                className="category-btn"
                style={{
                    background: category.name === selectCategory && '#FC1503',
                    color:'white'
                }}
                key={categories.name}
            >
                <span style={{ color:category.name === selectCategory ? 'white' : "red" ,marginRight:'15px' }} >{category.icon}</span>
                <span style={{ opacity: category.name === selectCategory ? '1':'0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
  
)

export default Sidebar
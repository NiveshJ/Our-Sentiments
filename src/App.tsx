import { Box } from "./components";
import { Flex } from "./components/Flex";
import { InputField } from "./components/InputField";

function App() {
    return (
        <Box>
            <Flex direction={"row"} css={{ padding: "2rem" }}>
                <InputField placeholder="Search Product" />
            </Flex>
        </Box>
    );
}

export default App;

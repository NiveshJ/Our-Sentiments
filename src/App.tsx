import { Box } from "./components";
import { Flex } from "./components/Flex";
import { InputField } from "./components/InputField";

function App() {
    return (
        <Box>
            <Flex direction={"row"}>
                <InputField></InputField>
            </Flex>
        </Box>
    );
}

export default App;

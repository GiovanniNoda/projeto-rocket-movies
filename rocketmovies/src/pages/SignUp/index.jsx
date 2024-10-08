import { Container, Form, Background } from "./style"
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FaArrowLeft } from "react-icons/fa"
import { Link } from 'react-router-dom'

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input placeholder ="Nome" type="text" icon={FiUser} />

                <Input placeholder ="E-mail" type="text" icon={FiMail} />

                <Input placeholder ="Senha" type="password" icon={FiLock} />

                    <Button>
                        Cadastrar
                    </Button>

                <div class="button-wrapper">
                    <Link to="/">
                        <ButtonText Icon={FaArrowLeft} title="Voltar para o login" />
                    </Link>
                </div>
            </Form>

            <Background />
        </Container>
    )
}
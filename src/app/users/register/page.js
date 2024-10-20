'use client'

import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import { v4 } from "uuid";

export default function Page() {
    const route = useRouter()

    const users = [];

    function salvar(dados) {
        dados.id = v4()
        users.push(dados)
        localStorage.setItem('users', JSON.stringify(users))
        Swal.fire({
            title: "Usuário cadastrado com sucesso!",
            text: "O usuário foi adicionado ao sistema",
            icon: "success"
          });
        return route.push('/users/login');
    }

    return (
        <Formik
            initialValues={{ nome: '', data_nascimento: '', cpf: '', celular: '', email: '', senha: '' }}
            onSubmit={values => salvar(values)}
        >
            {({
                values,
                handleChange,
                handleSubmit,
            }) => (
                <Form className="mt-3">
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange('nome')}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="data_nascimento">
                        <Form.Label>Data Nascimento:</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Digite seu data_nascimento"
                            name="data_nascimento"
                            value={values.data_nascimento}
                            onChange={handleChange('nome')}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text"
                            placeholder="Digite o seu CPF"
                            name="cpf"
                            value={values.cpf}
                            onChange={handleChange('cpf')}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="celular">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control type="tel"
                            placeholder="Digite o seu número de telefone"
                            name="celular"
                            value={values.celular}
                            onChange={handleChange('celular')}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="ex: kauanCine@gmail.com"
                            name="email"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="senha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"
                            placeholder="Digite sua senha"
                            name="senha"
                            value={values.senha}
                            onChange={handleChange('senha')}
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" className="ms-1" onClick={handleSubmit}>
                            <FaCheck />Salvar
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
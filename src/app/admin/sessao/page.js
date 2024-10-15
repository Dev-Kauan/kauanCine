'use client'

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {

    const [sessoes, setSessoes] = useState([])

    useEffect(() => {
        setSessoes(JSON.parse(localStorage.getItem('sessoes')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            //Pega todos que é diferente do id informado pelo o parametro
            const dados = sessoes.filter(item => item.id != id)
            localStorage.setItem('sessoes', JSON.stringify(dados))
            setSessoes(dados)
        }
    }

    return (
        <>
            <Link href={"/admin/sessao/form"} className="btn btn-primary mb-3 mt-3">
                <FaPlusCircle />Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Horario Sessão</th>
                        <th>Data Sessão</th>
                        <th>Filme</th>
                        <th>Sala</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {sessoes.map((item, i) => (
                        <tr key={item.id}>
                            <td>{i + 1}</td>
                            <td>{item.horario_sessao}</td>
                            <td>{item.data_sessao}</td>
                            <td>{item.filme}</td>
                            <td>{item.sala}</td>
                            <td>
                                <Link href={`/admin/sessao/form/${item.id}`}>
                                    <MdEdit title="Editar" className="text-primary" />
                                </Link>
                                <FaTrashAlt
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
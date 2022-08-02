import React, { useState } from "react";
import { Modal } from "reactstrap";
import { ModalBody } from "reactstrap";
import { Card } from "reactstrap";
import { Input } from "reactstrap";
import style from '../GeraCpf/styleh.css';


function TesteHelper() {
    const [open, setOpen] = useState(false);


    const [modal, setModal] = React.useState(false);

    const [value, setValue] = React.useState(false);

    // Toggle for Modal0
    //const toggle = (value) => setModal(!modal);

    function toggle(value) {
        setModal(!modal);

        setValue(`${value}`);
        setOpen(true)

    }




    return (
        <div>
            <Input type='submit' name='ajuda' onClick={toggle}>Ajuda</Input>

            {open &&
                <div>
                    <Card id="style-card-bemvindo"
                        isOpen={modal}
                        toggle={toggle}
                    >
                        <h6>Bem-vindo ao tutorial</h6>
                        <p>Como Cadastrar?</p>

                        <p>passo1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa similique a asperiores delectus, alias quibusdam quam corporis harum, repudiandae recusandae esse vitae. Sed autem quaerat error blanditiis. Totam, dolores maxime.</p>

                        <Input type="submit" name="fechar"></Input>
                    </Card>
                </div>
            }
            <div className="class-card">
                <Card className="class-inputs" id="style-card">
                    <h3>Bem-vindo - Cadastro</h3>


                    <Input type="text" name="nome" id="style-input1" placeholder="nome"></Input>
                    <Input type="text" name="nome" id="style-input1" placeholder="sobrenome"></Input>
                    <Input type="text" name="nome" id="style-input1" placeholder="numero"></Input>
                    <Input type="text" name="nome" id="style-input1" placeholder="telefone"></Input>


                    <Input type='submit' name='ajuda'></Input>
                </Card>

            </div>

        </div>
    )
}

export default TesteHelper;
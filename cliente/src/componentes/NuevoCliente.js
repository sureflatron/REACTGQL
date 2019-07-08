import React, { Component, Fragment } from 'react';

class NuevoCliente extends Component {
    state = {
        cliente:{
            nombre:'',
            apellido:'',
            empresa:'',
            edad:'',
            tipo:''
        }
    }
    render() {
        return (
            <Fragment>
                <h2 className="text-center">Nuevo Cliente</h2>
                <div className="row justify-content-center">
                    <form className="col-md-8 m-3">
                        <div className="form-row">
                            <div className="form-group col-md-6" >
                                <label>Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre"
                                onChange={e=>{
                                    this.setState({
                                        cliente:{
                                            nombre:e.target.value
                                        }
                                    })
                                }}></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Apellido</label>
                                <input type="text" className="form-control" placeholder="Apellido"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Empresa</label>
                                <input type="text" className="form-control" placeholder="Empresa"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Email"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Edad</label>
                                <input type="text" className="form-control" placeholder="Edad"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Tipo Cliente</label>
                                <select className="form-control">
                                    <option value="">Elegir...</option>
                                    <option value="PREMIUN">PREMIUN</option>
                                    <option value="BASICO">BASICO</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success float-right"> Guardar Cambios  </button>
                    </form>
                    ></div>
            </Fragment>
        );
    }
}

export default NuevoCliente;
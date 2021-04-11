import React, { useState } from 'react';
import "./style.css";
import { Table } from 'reactstrap';


const App = () => <TableTeams />;

interface GroupProps {
    posicao: number;
    pontos: number;
    time: { 
        time_id: number;
        nome_popular: string;
        escudo: string;
    }
    jogos: number;
    vitorias: number;
    empates: number;
    derrotas: number;
    gols_pro: number;
    gols_contra: number;
    saldo_gols: number;
    aproveitamento: number;
    variacao_posicao: number;
    ultimos_jogos: Array<string>;
}
interface TeamsGroup {
    groupA: Array<GroupProps>;
    groupB: Array<GroupProps>;
};
interface Teams {
    groupPhase: TeamsGroup;
};

const TableTeams = () => {
    const [teams, setTeam] = useState<Teams>();
    setTeam({ groupPhase: {
            "groupA": [
                {
                    posicao: 0,
                    pontos: 14,
                    time: {
                        time_id: 17,
                        nome_popular: "Flamengo",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c95084cb.svg"
                    },
                    jogos: 4,
                    vitorias: 4,
                    empates: -1,
                    derrotas: -1,
                    gols_pro: 13,
                    gols_contra: 1,
                    saldo_gols: 11,
                    aproveitamento: 99,
                    variacao_posicao: -1,
                    ultimos_jogos: ["v", "v", "v", "v", "v"]
                },
                {
                    posicao: 1,
                    pontos: 7,
                    time: {
                        time_id: 21,
                        nome_popular: "Botafogo",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c9b06760.svg"
                    },
                    jogos: 4,
                    vitorias: 1,
                    empates: 1,
                    derrotas: 0,
                    gols_pro: 8,
                    gols_contra: 6,
                    saldo_gols: 1,
                    aproveitamento: 52.3,
                    variacao_posicao: -1,
                    ultimos_jogos: ["v", "d", "e", "v", "e"]
                },
                {
                    posicao: 2,
                    pontos: 6,
                    time: {
                        time_id: 19,
                        nome_popular: "Boavista",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c989287e.svg"
                    },
                    jogos: 4,
                    vitorias: 1,
                    empates: 0,
                    derrotas: 1,
                    gols_pro: 4,
                    gols_contra: 4,
                    saldo_gols: -1,
                    aproveitamento: 45.7,
                    variacao_posicao: -1,
                    ultimos_jogos: ["d", "v", "v", "e", "d"]
                },
                {
                    posicao: 3,
                    pontos: 6,
                    time: {
                        time_id: 23,
                        nome_popular: "Bangu",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c9e3935a.svg"
                    },
                    jogos: 4,
                    vitorias: 1,
                    empates: 0,
                    derrotas: 1,
                    gols_pro: 3,
                    gols_contra: 5,
                    saldo_gols: -3,
                    aproveitamento: 45.7,
                    variacao_posicao: 0,
                    ultimos_jogos: ["v", "d", "e", "d", "v"]
                },
                {
                    posicao: 4,
                    pontos: 4,
                    time: {
                        time_id: 14,
                        nome_popular: "Portuguesa-RJ",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c916390f.svg"
                    },
                    jogos: 4,
                    vitorias: 0,
                    empates: 1,
                    derrotas: 1,
                    gols_pro: 4,
                    gols_contra: 3,
                    saldo_gols: 0,
                    aproveitamento: 32.3,
                    variacao_posicao: -2,
                    ultimos_jogos: ["d", "v", "d", "e", "e"]
                },
                {
                    posicao: 5,
                    pontos: -1,
                    time: {
                        time_id: 24,
                        nome_popular: "Cabofriense",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c9fabae8.svg"
                    },
                    jogos: 4,
                    vitorias: -1,
                    empates: -1,
                    derrotas: 4,
                    gols_pro: 3,
                    gols_contra: 16,
                    saldo_gols: -14,
                    aproveitamento: -1,
                    variacao_posicao: -1,
                    ultimos_jogos: ["d", "d", "d", "d", "d"]
                }
            ],
            "groupB": [
                {
                    posicao: 0,
                    pontos: 9,
                    time: {
                        time_id: 25,
                        nome_popular: "Fluminense",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999ca0e01e3.svg"
                    },
                    jogos: 4,
                    vitorias: 2,
                    empates: 0,
                    derrotas: 0,
                    gols_pro: 10,
                    gols_contra: 3,
                    saldo_gols: 6,
                    aproveitamento: 65.7,
                    variacao_posicao: -1,
                    ultimos_jogos: ["v", "v", "v", "d", "e"]
                },
                {
                    posicao: 1,
                    pontos: 9,
                    time: {
                        time_id: 20,
                        nome_popular: "Volta Redonda",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c99cab4a.svg"
                    },
                    jogos: 4,
                    vitorias: 2,
                    empates: 0,
                    derrotas: 0,
                    gols_pro: 6,
                    gols_contra: 2,
                    saldo_gols: 3,
                    aproveitamento: 65.7,
                    variacao_posicao: -1,
                    ultimos_jogos: ["v", "e", "d", "v", "v"]
                },
                {
                    posicao: 2,
                    pontos: 7,
                    time: {
                        time_id: 22,
                        nome_popular: "Vasco",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c9c703f0.svg"
                    },
                    jogos: 4,
                    vitorias: 1,
                    empates: 1,
                    derrotas: 0,
                    gols_pro: 4,
                    gols_contra: 3,
                    saldo_gols: 0,
                    aproveitamento: 52.3,
                    variacao_posicao: 0,
                    ultimos_jogos: ["e", "e", "d", "v", "v"]
                },
                {
                    posicao: 3,
                    pontos: 5,
                    time: {
                        time_id: 16,
                        nome_popular: "Madureira",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c93c8099.svg"
                    },
                    jogos: 4,
                    vitorias: 1,
                    empates: -1,
                    derrotas: 2,
                    gols_pro: 5,
                    gols_contra: 8,
                    saldo_gols: -4,
                    aproveitamento: 39,
                    variacao_posicao: -2,
                    ultimos_jogos: ["d", "v", "v", "d", "d"]
                },
                {
                    posicao: 4,
                    pontos: 3,
                    time: {
                        time_id: 18,
                        nome_popular: "Resende",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c96a8a14.svg"
                    },
                    jogos: 4,
                    vitorias: 0,
                    empates: 0,
                    derrotas: 2,
                    gols_pro: 3,
                    gols_contra: 7,
                    saldo_gols: -5,
                    aproveitamento: 25.7,
                    variacao_posicao: -1,
                    ultimos_jogos: ["e", "d", "d", "v", "d"]
                },
                {
                    posicao: 5,
                    pontos: 3,
                    time: {
                        time_id: 13,
                        nome_popular: "Macaé",
                        escudo:
                            "https://apifutebol.s2.sa-east-1.amazonaws.com/escudos/5f999c8febd2d.svg"
                    },
                    jogos: 4,
                    vitorias: 0,
                    empates: 0,
                    derrotas: 2,
                    gols_pro: 1,
                    gols_contra: 6,
                    saldo_gols: -6,
                    aproveitamento: 25.7,
                    variacao_posicao: -1,
                    ultimos_jogos: ["d", "d", "v", "d", "e"]
                }
            ]
        }})
    return (
        <Table>
            <thead>
                <th />
                <th> Time </th>
                <th> P </th>
                <th> J </th>
                <th> V </th>
                <th> E </th>
                <th> D </th>
                <th> Recentes </th>
            </thead>
            <tbody>
                {
                    teams &&
                    teams.groupPhase &&
                    teams.groupPhase.groupA &&
                    teams.groupPhase.groupA.sort((a, b) => a.posicao - b.posicao).map((r: GroupProps) => (
                        <RowTeamsInfo team={r} />
                    ))
                }
            </tbody>
        </Table>
    )
}

interface RowTeamsInfoProps {
    team: GroupProps,
};
const RowTeamsInfo: React.FC<RowTeamsInfoProps> = ({ team }) => {
    const renderRecentes = (result: string) => {
        if (result === "v")
            return <span className="dot" style={{ backgroundColor: "#00ff00" }
            } />;
        if (result === "d")
            return <span className="dot" style={{ backgroundColor: "#ff0000" }
            } />;
        return <span className="dot"/>;
    }
    console.log(team);
    if (team)
        return (
            <tr key={team.time.time_id}>
                <th><img alt='' src={team.time.escudo} style={{ width: '25px' }} /></th >
                <th>{team.time.nome_popular}</th>
                <th>{team.pontos} </th>
                <th>{team.jogos} </th>
                <th>{team.vitorias}</th>
                <th>{team.empates}</th>
                <th>{team.derrotas}</th>
                <th>{team.ultimos_jogos.map(r => <>{renderRecentes(r)} </>)}</th>
            </tr>
        );
        return <div/>;
}

export default App;
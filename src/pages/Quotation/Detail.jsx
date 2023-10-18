import BoxHeader from '../../components/BoxHeader'
import { Icon, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Quotations from './Quotations';

export default function Detail() {

     // get element by id
  // const { pricelistId } = useParams();
  // const card = cardsData.find((cards) => cards.id === (pricelistId));
//   const { t } = useTranslation();
  const [mode, setMode] = useState();
  const navigate = useNavigate();
  const { params } = useLoaderData();
  const pricelistId = params;

  const handleMode = (_, mode) => {
    if (mode === "edit") {
      navigate(`/price-lists/${pricelistId}/edit`);
    }
    setMode(mode);
  };

    const ButtonGroup = () => {
        return (
          <ToggleButtonGroup
            size="small"
            color={mode === "delete" ? "error" : "primary"}
            value={mode}
            exclusive
            onChange={handleMode}
            aria-label="text alignment"
          >
            <ToggleButton value="edit" aria-label="edit">
              <Icon>edit</Icon>
            </ToggleButton>
            <ToggleButton value="delete" aria-label="delete">
              <Icon>delete</Icon>
            </ToggleButton>
          </ToggleButtonGroup>
        );
      };
    

  return (
    <>
    <BoxHeader title={"Detail"} ButtonElement={ButtonGroup} parentPath={Quotations}>  </BoxHeader>
    </>
  )
}

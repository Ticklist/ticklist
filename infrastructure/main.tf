terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>2.31.1"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg-ticklist" {
  name     = "rg-ticklist"
  location = "swz-north"
  tags = {
    owner        = "matthaeus.heer@ipt.ch, matthias.staehli@ipt.ch"
    source      = "Terraform"
  }
}
